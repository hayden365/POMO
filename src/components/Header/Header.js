import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import LogIn from "../Auth/Login";

const Header = () => {
	const [loginShown, setLoginShown] = useState(false);

	const authCtx = useContext(AuthContext);

	const clickHandler = () => {
		setLoginShown(true);
	};

	const closeHandler = () => {
		setLoginShown(false);
	};

	return (
		<div>
			<h1>POMO</h1>
			{loginShown && <LogIn onClose={closeHandler}></LogIn>}
			{!authCtx.isLoggedIn && <Button onClick={clickHandler}>로그인</Button>}
			{authCtx.isLoggedIn && <Button>로그아웃</Button>}
		</div>
	);
};

export default Header;
