import React, { useState } from "react";
import Select from "react-select";
import {initialRoleList,rightData} from "./Data";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Modal,
  Container,
  Row,
  Col,
  Badge,
  Tab,
  ListGroup,
} from "react-bootstrap";

import RoleTable from "./RoleTable";



function RoleManagement() {
  const [changeTableFlag, setChangeTableFlag] = useState(false);
  const [roleList, setRoleList] = useState(initialRoleList);

  //Add new role
  const [showAddRole, setShowAddRole] = useState(false);
  const [newRole, setNewRole] = useState({
    roleName: "",
    status: 1,
  });
  const [rightArr, setRightArr] = useState();
  const handleShowAddRole = () => setShowAddRole(true);
  const handleCloseAddRole = () => {
    setNewRole({ roleName: "", status: 1 });
    setShowAddRole(false);
  };
  const completeAddRole = (newRole) => {
    const newRoleList = [
      ...roleList,
      { id: newRole.id, roleName: newRole.roleName, status: newRole.status },
    ];
    setChangeTableFlag(!changeTableFlag);
    setRoleList(newRoleList);
  };
  const handleAddRole = () => {
    //API
    //test
    completeAddRole({
      id: Math.floor(Math.random() * 100) + 1,
      roleName: newRole.roleName,
      status: newRole.status,
    });
    //end test
    handleCloseAddRole();
  };

  //Detail Role
  const [showDetailRole, setShowDetailRole] = useState(false);
  const [detailRole, setDetailRole] = useState({
    roleName: "",
    status: "",
    rights: [],
  });
  const handleCloseDetailRole = () => setShowDetailRole(false);
  const handleShowDetailRole = (role) => {
    setShowDetailRole(true);
    setDetailRole({
      roleName: role.roleName,
      status: role.status,
      rights: role.rights,
    });
  };

  //Edit Role
  const [showEditRole, setShowEditRole] = useState(false);
  const [editRole, setEditRole] = useState({
    id: "",
    roleName: "",
  });
  const handleShowEditRole = (role) => {
    setShowEditRole(true);
    setEditRole({
      id: role.id,
      roleName: role.roleName,
      status: role.status,
    });
  };
  const handleCloseEditRole = () => setShowEditRole(false);
  const completeEditRole = (editRole) => {
    let newRoleList = [...roleList];
    const objIndex = newRoleList.findIndex((obj) => obj.id === editRole.id);
    newRoleList[objIndex].roleName = editRole.roleName;
    newRoleList[objIndex].status = editRole.status;
    setChangeTableFlag(!changeTableFlag);
    setRoleList(newRoleList);
  };
  const handleEditRole = () => {
    //API
    //test
    completeEditRole({
      id: editRole.id,
      roleName: editRole.roleName,
      status: editRole.status,
    });
    //end test
    handleCloseEditRole();
  };

  //Delete role
  const [showDeleteRole, setShowDeleteRole] = useState(false);
  const [deleteRole, setDeleteRole] = useState({
    id: "",
    roleName: "",
  });
  const handleShowDeleteRole = (role) => {
    setShowDeleteRole(true);
    setDeleteRole({
      id: role.id,
      roleName: role.roleName,
    });
  };
  const handleCloseDeleteRole = () => setShowDeleteRole(false);
  const completeDeleteRole = (deleteRole) => {
    let newRoleList = [...roleList];
    const objIndex = newRoleList.findIndex((obj) => obj.id === deleteRole.id);
    newRoleList.splice(objIndex, 1);
    setChangeTableFlag(!changeTableFlag);
    setRoleList(newRoleList);
  };
  const handleDeleteRole = () => {
    //API
    //test
    completeDeleteRole({
      id: deleteRole.id,
      roleName: deleteRole.roleName,
    });
    //end test
    handleCloseDeleteRole();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title
                  className="d-flex align-items-center"
                  style={{ fontSize: "25px" }}
                >
                  Role list
                </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive">
                {/* Begin modal add role */}
                <Modal
                  show={showAddRole}
                  onHide={handleCloseAddRole}
                  style={{
                    height: "1000px",
                  }}
                >
                  <Modal.Header closeButton style={{ height: "100px" }}>
                    <Modal.Title>Add new role</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group className="mb-3">
                      <Form.Label>Role name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type role name"
                        value={newRole.roleName}
                        onChange={(e) =>
                          setNewRole((pre) => {
                            return { ...pre, roleName: e.target.value };
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          id="new-role-active"
                          name="status"
                          value="1"
                          checked={newRole.status}
                          onChange={(e) => {
                            setNewRole({
                              ...newRole,
                              status: newRole.status ? 0 : 1,
                            });
                          }}
                          style={{
                            height: "20px",
                            width: "20px",
                            marginRight: "5px",
                          }}
                        />
                        <label htmlFor="new-role-active">Active</label>
                        <input
                          type="radio"
                          id="new-role-inactive"
                          name="status"
                          value="0"
                          checked={!newRole.status}
                          onChange={(e) => {
                            console.log(newRole);
                            setNewRole({
                              ...newRole,
                              status: newRole.status ? 0 : 1,
                            });
                          }}
                          style={{
                            height: "20px",
                            width: "20px",
                            marginLeft: "50px",
                            marginRight: "5px",
                          }}
                        />
                        <label htmlFor="new-role-inactive">Inactive</label>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Right</Form.Label>
                      <Select
                        options={rightData.map((right) => {
                          return {
                            value: right.id,
                            label: right.rightName,
                          };
                        })}
                        closeMenuOnSelect={false}
                        value={rightArr}
                        onChange={setRightArr}
                        isMulti
                        placeholder="Filter by Right..."
                        maxMenuHeight={250}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer className="mt-4 d-flex justify-content-end">
                    <Button
                      className="btn-fill mx-4"
                      variant="primary"
                      onClick={handleAddRole}
                    >
                      Add
                    </Button>
                    <Button
                      className="btn-fill"
                      variant="secondary"
                      onClick={handleCloseAddRole}
                    >
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* End modal add role */}

                {/* Begin modal detail role */}
                <Modal
                  show={showDetailRole}
                  onHide={handleCloseDetailRole}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Role {detailRole.roleName}{" "}
                      {detailRole.status ? (
                        <Badge bg="success">Active</Badge>
                      ) : (
                        <Badge bg="danger">Inactive</Badge>
                      )}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 className="mb-4 font-weight-bold">Right list</h5>
                    <Tab.Container
                      id="list-group-tabs-example"
                      defaultActiveKey=""
                    >
                      <Row>
                        <Col sm={6}>
                          <ListGroup>
                            {detailRole.rights.map((rightId) => {
                              let objIndex = rightData.findIndex(
                                (obj) => obj.id == rightId
                              );
                              return (
                                <ListGroup.Item
                                  action
                                  href={"#right-" + rightData[objIndex].id}
                                >
                                  {rightData[objIndex].rightName}
                                </ListGroup.Item>
                              );
                            })}
                          </ListGroup>
                        </Col>
                        <Col sm={6}>
                          <Tab.Content>
                            {detailRole.rights.map((rightId) => {
                              let objIndex = rightData.findIndex(
                                (obj) => obj.id == rightId
                              );
                              return (
                                <Tab.Pane
                                  eventKey={"#right-" + rightData[objIndex].id}
                                >
                                  {rightData[objIndex].description}
                                </Tab.Pane>
                              );
                            })}
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Modal.Body>
                  <Modal.Footer className="mt-4 d-flex justify-content-end">
                    <Button
                      variant="secondary"
                      className="btn-fill"
                      onClick={handleCloseDetailRole}
                    >
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* End modal detail role */}

                {/* Begin modal edit role */}
                <Modal
                  show={showEditRole}
                  onHide={handleCloseEditRole}
                  style={{
                    height: "1000px",
                  }}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit role</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group className="mb-3">
                      <Form.Label>Role name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type role name"
                        value={editRole.roleName}
                        onChange={(e) =>
                          setEditRole((pre) => {
                            return { ...pre, roleName: e.target.value };
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          id="active"
                          name="status"
                          value="1"
                          checked={editRole.status}
                          onChange={(e) => {
                            setEditRole({
                              ...editRole,
                              status: editRole.status ? 0 : 1,
                            });
                            console.log(editRole);
                          }}
                          style={{
                            height: "20px",
                            width: "20px",
                            marginRight: "5px",
                          }}
                        />
                        <label htmlFor="active">Active</label>
                        <input
                          type="radio"
                          id="inactive"
                          name="status"
                          value="0"
                          checked={!editRole.status}
                          onChange={(e) => {
                            setEditRole({
                              ...editRole,
                              status: editRole.status ? 0 : 1,
                            });
                          }}
                          style={{
                            height: "20px",
                            width: "20px",
                            marginLeft: "50px",
                            marginRight: "5px",
                          }}
                        />
                        <label htmlFor="inactive">Inactive</label>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Rights</Form.Label>
                      <Select
                        options={rightData.map((right) => {
                          return {
                            value: right.id,
                            label: right.rightName,
                          };
                        })}
                        closeMenuOnSelect={false}
                        value={rightArr}
                        onChange={setRightArr}
                        isMulti
                        placeholder="Filter by Right..."
                        maxMenuHeight={250}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer className="mt-4 d-flex justify-content-end">
                    <Button
                      variant="primary"
                      className="btn-fill mx-4"
                      onClick={handleEditRole}
                    >
                      Update
                    </Button>
                    <Button
                      variant="secondary"
                      className="btn-fill"
                      onClick={handleCloseEditRole}
                    >
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* End modal edit role */}

                {/* Begin modal delete role */}
                <Modal show={showDeleteRole} onHide={handleCloseDeleteRole}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Delete role {deleteRole.roleName}?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ color: "#9A9A9A", fontStyle: "italic" }}>
                    Do you really want to delete this role?
                  </Modal.Body>
                  <Modal.Footer className="mt-4 d-flex justify-content-end">
                    <Button
                      variant="danger mx-4"
                      className="btn-fill"
                      onClick={handleDeleteRole}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="secondary"
                      className="btn-fill"
                      onClick={handleCloseDeleteRole}
                    >
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* End modal delete role */}
                <div className="d-flex justify-content-end my-2">
                  <Button
                    variant="primary"
                    onClick={handleShowAddRole}
                    style={{ minWidth: "150px" }}
                    className="btn-fill"
                  >
                    Add new role
                  </Button>{" "}
                </div>

                <RoleTable
                  roleList={roleList}
                  handleShowDetailRole={handleShowDetailRole}
                  handleShowEditRole={handleShowEditRole}
                  handleShowDeleteRole={handleShowDeleteRole}
                  changeTableFlag={changeTableFlag}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RoleManagement;
