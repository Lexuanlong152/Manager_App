import React from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
  useFilters,
  useRowSelect,
} from "react-table";
import { matchSorter } from "match-sorter";
import { Table, Input, Label } from "reactstrap";
import { Button, Form, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <Form.Group className="mb-0">
      <Form.Control
        onClick={(e) => e.stopPropagation()}
        type="search"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Search ${count} records...`}
      ></Form.Control>
    </Form.Group>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

fuzzyTextFilterFn.autoRemove = (val) => !val;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function WrapTable({ columns, data, handleReset }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const props = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;
  React.useEffect(() => {}, [globalFilter]);

  function sortName(column, sortArr) {
    if (sortArr.includes(column.Header)) return column.getSortByToggleProps();
  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-between pb-3">
        <div className="d-flex align-items-center">
          <div className="mr-3">
            <Input
              type="search"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>
        <div>
          {/* <Button
            variant="danger"
            className="btn-fill"
            style={{ minWidth: "150px" }}
            onClick={() => {}}
          >
            Delete selected
          </Button> */}
        </div>
      </div>
      <style>{`
      td,tr,th{
        text-align: center;
      }
      `}</style>
      <Table bordered striped hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(sortName(column, []))}>
                  <div
                    className="heading"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </div>

                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination d-flex align-items-center justify-content-center">
        <div
          className="d-flex justify-content-between"
          style={{ alignItems: "center", width: 670 }}
        >
          <Button
            className="btn-fill"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </Button>
          <Button
            className="btn-fill"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </Button>
          <Button
            className="btn-fill"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </Button>
          <Button
            className="btn-fill"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </Button>

          <span className="">
            <span>Page </span>
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>

          <div className="d-flex align-items-center">
            <span className="mr-3"> Go to page:</span>
            <Input
              type="number"
              className="mr-3"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </div>

          <div className="">
            <Input
              type="select"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              style={{ width: "90px" }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Input>
          </div>
        </div>
      </div>
    </>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val) => typeof val !== "number";

function RoleTable({
  roleList,
  handleShowDetailRole,
  handleShowEditRole,
  handleShowDeleteRole,
  changeTableFlag,
}) {
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
        Filter: "",
      },
      {
        Header: "role name",
        accessor: "roleName",
        Filter: "",
      },
      {
        Header: "status",
        accessor: "status",
        Filter: "",
      },
      {
        Header: "action",
        accessor: "action",
        Filter: "",
      },
    ],
    []
  );

  const handleStatus = (status) => {
    if (status)
      return (
        <Badge bg="success" style={{ fontSize: "15px" }}>
          Active
        </Badge>
      );
    else
      return (
        <Badge bg="danger" style={{ fontSize: "15px" }}>
          Inactive
        </Badge>
      );
  };

  const showButton = (role) => {
    return (
      <div>
        <Button variant="success" onClick={() => handleShowDetailRole(role)}>
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button className="mx-2" onClick={(e) => handleShowEditRole(role)}>
          <FontAwesomeIcon icon={faPenSquare} />
        </Button>
        <Button variant="danger" onClick={() => handleShowDeleteRole(role)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    );
  };

  const handleData = (roleList) => {
    return roleList.map((role) => ({
      id: role.id,
      roleName: role.roleName,
      status: handleStatus(role.status),
      action: showButton(role),
    }));
  };

  const [data, setData] = React.useState(handleData(roleList));

  const handleReset = () => {
    setData(handleData(roleList));
  };

  React.useEffect(() => {
    handleReset();
  }, [changeTableFlag]);

  return (
    <>
      <WrapTable columns={columns} data={data} handleReset={handleReset} />
    </>
  );
}

export default RoleTable;
