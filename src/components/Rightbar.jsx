import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
	return (
		<Box
			flex={2}
			p={2}
			sx={{
				display: {
					xs: "none",
					sm: "block",
				},
			}}
		>
			<Box sx={{ position: "fixed" }} width={350}>
				<Typography variant="h6" fontWeight={100}>
					Online Friends
				</Typography>
				<AvatarGroup max={7}>
					<Avatar
						alt="Remy Sharp"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					/>
				</AvatarGroup>
				<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100} gap={5}>
					<ImageListItem>
						<img
							src="https://images.unsplash.com/photo-1679678691010-985ab6b8ff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://plus.unsplash.com/premium_photo-1661933831125-6e4f795abf08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src="https://plus.unsplash.com/premium_photo-1677756271500-905f1ac3f2bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					{/* <ImageListItem>
						<img
							src="https://plus.unsplash.com/premium_photo-1677636665171-5cb916774698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src="https://plus.unsplash.com/premium_photo-1672088104824-f0be02d902e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src="https://images.unsplash.com/photo-1680199690179-7fe21b65d9ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src="https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem> */
					/* <ImageListItem>
						<img
							src="https://images.unsplash.com/photo-1680199994489-22b5f4ccc620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src="https://images.unsplash.com/photo-1670272506220-f8332b178148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src="https://images.unsplash.com/photo-1680034200919-26a16a426d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</ImageListItem> */}
				</ImageList>
				<Typography variant="h6" fontWeight={100} mt={2}>
					Conversations
				</Typography>
				<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Rightbar;
