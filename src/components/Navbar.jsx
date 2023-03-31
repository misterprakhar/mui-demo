import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));
const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Navbar
				</Typography>
				<AccountCircle sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="Search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: "40px", height: "40px" }}
						onClick={() => setOpen(true)}
						src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
					/>
				</Icons>
				<UserBox onClick={() => setOpen(true)}>
					<Avatar
						sx={{ width: "40px", height: "40px" }}
						src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
					/>
					<Typography>User</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>Logout</MenuItem>
				<MenuItem>My account</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
