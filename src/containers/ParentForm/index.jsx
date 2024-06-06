import {
	Box,
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';

const App = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		dob: '',
		gender: '',
		address: '',
		parentName: '',
		phone1: '',
		phone2: '',
		signature: '',
		className: '',
		classSchedule: '',
		fee: '',
		startDate: '',
	});

	const formRef = useRef(null);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await generatePDF();
	};

	const generatePDF = async () => {
		const formElement = formRef.current;

		// Capture the form using html2canvas
		const canvas = await html2canvas(formElement, { scale: 1 });
		const imgData = canvas.toDataURL('image/png');

		const imgWidth = canvas.width / 3;
		const imgHeight = canvas.height / 3;

		// Create a new jsPDF document with custom dimensions
		const pdf = new jsPDF({
			orientation: 'p',
			unit: 'px',
			format: [imgWidth, imgHeight],
		});

		// Add the image to the PDF
		pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

		pdf.save('form-data.pdf');
	};

	return (
		<Container maxWidth="lg" style={{ overflow: 'auto' }}>
			<Container ref={formRef}>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					sx={{ mt: 4 }}
					onSubmit={handleSubmit}
				>
					<Typography variant="h4" gutterBottom>
						PHIẾU GHI DANH (Application form)
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Năm học: 2024 - 2025 (School year)
					</Typography>

					<Typography variant="h6" gutterBottom>
						I. Thông tin học viên (Student information)
					</Typography>
					<TextField
						fullWidth
						label="Tên HV / Full name"
						margin="normal"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Ngày sinh / DOB"
						margin="normal"
						name="dob"
						value={formData.dob}
						onChange={handleChange}
					/>

					<FormControl component="fieldset" margin="normal">
						<FormLabel component="legend">Giới tính / Sex</FormLabel>
						<RadioGroup
							row
							aria-label="gender"
							name="gender"
							value={formData.gender}
							onChange={handleChange}
						>
							<FormControlLabel
								value="male"
								control={<Radio />}
								label="Nam / Male"
							/>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Nữ / Female"
							/>
						</RadioGroup>
					</FormControl>

					<TextField
						fullWidth
						label="Đ/c / Address"
						margin="normal"
						name="address"
						value={formData.address}
						onChange={handleChange}
					/>

					<Typography variant="h6" gutterBottom>
						II. TT PH
					</Typography>
					<TextField
						fullWidth
						label="Tên PH / Parent's name"
						margin="normal"
						name="parentName"
						value={formData.parentName}
						onChange={handleChange}
					/>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								fullWidth
								label="SĐT1"
								margin="normal"
								name="phone1"
								value={formData.phone1}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								label="SĐT2"
								margin="normal"
								name="phone2"
								value={formData.phone2}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<TextField
						fullWidth
						label="Chữ ký xác nhận"
						margin="normal"
						name="signature"
						value={formData.signature}
						onChange={handleChange}
					/>

					<Typography variant="h6" gutterBottom>
						II. Thông tin lớp đăng ký
					</Typography>
					<TextField
						fullWidth
						label="Tên lớp"
						margin="normal"
						name="className"
						value={formData.className}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Lịch học (Số buổi / tháng)"
						margin="normal"
						name="classSchedule"
						value={formData.classSchedule}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="HP"
						margin="normal"
						name="fee"
						value={formData.fee}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Bắt đầu học từ ngày"
						margin="normal"
						name="startDate"
						value={formData.startDate}
						onChange={handleChange}
					/>

					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ mt: 2 }}
					>
						Submit
					</Button>
				</Box>
			</Container>
		</Container>
	);
};

export default App;
