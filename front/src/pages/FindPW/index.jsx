import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../../layout/Header/'
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";

const FindPW = () => {
    return(
        <Wrapper>
            <Header></Header>
            <Grid container className="root" justify="center" alignItems="center">
                <Grid item xs={12} className="findpw">
                    <div>비밀번호 찾기</div>
                </Grid>

                <Grid item xs={10} className="info">
                    <form>
                        <div>
                            <TextField required fullWidth id="id" label="아이디" variant="outlined" autoFocus></TextField>
                        </div>
                        <div>
                            <TextField required fullWidth id="deviceNum" label="기기번호" variant="outlined" ></TextField>
                        </div>
                        <Button type="submit" variant="contained" className="submitBtn">비밀번호 찾기</Button>
                    </form>
                </Grid>

            </Grid>
        </Wrapper>
    );
};

export default FindPW;