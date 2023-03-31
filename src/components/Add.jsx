import styled from "@emotion/styled";
import { Add as AddIcon, DateRange, Image, InsertEmoticon, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

const StyledModal = styled(Modal)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: "rgba(80,80,80,0.5)",
	backdropFilter: "blur(5px)",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	marginBottom: "20px",
	gap: "10px",
});

const Add = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip
				title="Add post"
				sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%-25px)", md: 30 } }}
				onClick={(e) => setOpen(true)}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={400}
					height={280}
					bgcolor={"background.default"}
					color={"text.primary"}
					p={3}
					borderRadius={5}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>
					<UserBox>
						<Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" />
						<Typography fontWeight={500} variant="span">
							John Doe
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100% " }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<InsertEmoticon color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>
					<ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
