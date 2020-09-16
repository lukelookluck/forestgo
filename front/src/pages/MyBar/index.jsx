import React, { useState, useEffect, Fragment, useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";
import Wrapper from "./styles";
import SyncButton from "../../components/SyncButton";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

import { CommonContext } from "../../context/CommonContext";
import axios from "axios";

const MyBar = () => {
  const { serverUrl, user } = useContext(CommonContext);
  const [menuList, setMenuList] = useState([]);
  const [index, setIndex] = useState(0);

  const MyCocktail = menuList[index];

  function refreshList() {
    axios
      .get(`${serverUrl}/accounts/user/current`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMenuList(res.data.save_articles);
        console.log(menuList);
        setIndex(0);
      })
      .catch((err) => console.log(err + " 에러났음"));
  }

  useEffect(() => {
    refreshList();
    console.log("asda");
    if (menuList.length === 0) {
      console.log("i don't know");
    }
  }, []);

  const deleteRecipe = (id) => (e) => {
    try {
      axios
        .post(
          `${serverUrl}/community/article_save/${id}/`,
          { user: user.user.id },
          {
            headers: {
              Authorization: `JWT ${user.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          refreshList();
          setIndex(0);
        })
        .catch((err) => console.log(err));

      console.log("삭제 버튼 클릭, id = " + id);
      alert("삭제 성공");
    } catch (e) {
      alert("네트워크 연결에 문제가 있어 레시피 삭제에 실패했습니다.");
    }
  };

  function igrList() {
    return (
      <Fragment>
        {MyCocktail.ingredient1.length != 0 ? (
          <ListGroupItem>
            <div className="listdiv">{MyCocktail.ingredient1}</div>
            <div className="listdiv">{MyCocktail.measure1} ml</div>
          </ListGroupItem>
        ) : (
          <div></div>
        )}
        {MyCocktail.ingredient2.length != 0 ? (
          <ListGroupItem>
            <div className="listdiv">{MyCocktail.ingredient2}</div>
            <div className="listdiv">{MyCocktail.measure2} ml</div>
          </ListGroupItem>
        ) : (
          <div></div>
        )}
        {MyCocktail.ingredient3.length != 0 ? (
          <ListGroupItem>
            <div className="listdiv">{MyCocktail.ingredient3}</div>
            <div className="listdiv">{MyCocktail.measure3} ml</div>
          </ListGroupItem>
        ) : (
          <div></div>
        )}
        {MyCocktail.ingredient4.length != 0 ? (
          <ListGroupItem>
            <div className="listdiv">{MyCocktail.ingredient4}</div>
            <div className="listdiv">{MyCocktail.measure4} ml</div>
          </ListGroupItem>
        ) : (
          <div></div>
        )}
        {MyCocktail.ingredient5.length != 0 ? (
          <ListGroupItem>
            <div className="listdiv">{MyCocktail.ingredient5}</div>
            <div className="listdiv">{MyCocktail.measure5} ml</div>
          </ListGroupItem>
        ) : (
          <div></div>
        )}
        {MyCocktail.ingredient6.length != 0 ? (
          <ListGroupItem>
            <div className="listdiv">{MyCocktail.ingredient6}</div>
            <div className="listdiv">{MyCocktail.measure6} ml</div>
          </ListGroupItem>
        ) : (
          <div></div>
        )}
        {console.log(MyCocktail)}
      </Fragment>
    );
  }

  return (
    <Wrapper>
      {/* {menuList[1]} */}
      {MyCocktail ? (
        <Fragment>
          <Grid container className="syncButtonGrid" justify="flex-end">
            <SyncButton />
          </Grid>
          <Grid
            container
            className="recipe"
            justify="center"
            alignItems="center"
          >
            <Card>
              <Card.Body>
                <Card.Title>
                  <div className="namediv">{MyCocktail.title}</div>
                  <div className="iconbtndiv">
                    <IconButton
                      aria-label="delete"
                      className="deletebtn"
                      onClick={deleteRecipe(MyCocktail.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Card.Title>
                <hr />
                <div className="card-imageBox">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={`${serverUrl}${MyCocktail.image}`}
                  />
                </div>
                <hr />
                <Card.Text>{MyCocktail.detail}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">{igrList()}</ListGroup>
            </Card>
          </Grid>

          <Grid container justify="center" className="pagination">
            <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
              <Route>
                {({ location }) => {
                  const query = new URLSearchParams(location.search);
                  const page = parseInt(query.get("page") || "1", 10);
                  return (
                    <Pagination
                      size="small"
                      page={page}
                      count={menuList.length}
                      onChange={setIndex(page - 1)}
                      renderItem={(item) => (
                        <PaginationItem
                          component={Link}
                          to={`/inbox${
                            item.page === 1 ? "" : `?page=${item.page}`
                          }`}
                          {...item}
                        />
                      )}
                    />
                  );
                }}
              </Route>
            </MemoryRouter>
          </Grid>
        </Fragment>
      ) : (
        <div className="sug">커뮤니티에서 레시피를 찜해보세요!</div>
      )}
    </Wrapper>
  );
};

export default MyBar;
