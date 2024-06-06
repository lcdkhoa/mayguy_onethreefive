import {
	Button,
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
		const canvas = await html2canvas(formElement, { scale: 1.5 });
		const imgData = canvas.toDataURL('image/png');

		const imgWidth = canvas.width / 2;
		const imgHeight = canvas.height / 2;

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
		<form ref={formRef} onSubmit={handleSubmit}>
			<Grid
				container
				item
				direction={'column'}
				id="main"
				style={{ padding: '20px' }}
			>
				<Grid
					id="header"
					item
					container
					xs={12}
					style={{ marginTop: '-70px', paddingBottom: '20px' }}
					gutterBottom
				>
					<Grid
						item
						container
						xs={12}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<img
							src="/images/parent-form/logo.png"
							alt="Minh Anh Logo"
							style={{
								height: '300px',
								width: '300px',
							}}
						/>
					</Grid>

					<Grid
						item
						container
						xs={12}
						direction={'row'}
						style={{ marginTop: '-60px' }}
					>
						<Grid xs={3.5} item></Grid>
						<Grid xs={1.2} item textAlign={'start'}>
							<Typography variant="caption1" fontWeight={600}>
								Hotline/ Zalo:
							</Typography>
						</Grid>
						<Grid xs item>
							<Typography variant="caption1" fontWeight={600}>
								094 510 71 10
							</Typography>
						</Grid>
					</Grid>

					<Grid
						item
						container
						xs={12}
						direction={'row'}
						style={{ marginTop: '-40px' }}
					>
						<Grid xs={3.5} item></Grid>
						<Grid xs={8} item textAlign={'start'}>
							<Typography variant="caption1" fontWeight={600}>
								Đường Lê Thanh Nghị, tổ 2, khu 6 - Huyện Côn Đảo, tỉnh Bà Rịa -
								Vũng Tàu
							</Typography>
						</Grid>
						<Grid xs item>
							<Typography variant="caption1" fontWeight={600}></Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid item container xs={12} id="part-i">
					<Grid item container justifyContent={'center'} xs={12}>
						<Typography variant="h3" gutterBottom>
							PHIẾU GHI DANH (Application form)
						</Typography>
					</Grid>
					<Grid item container justifyContent={'center'} xs={12}>
						<Typography variant="subtitle1" gutterBottom>
							Năm học: 2024 - 2025 (School year)
						</Typography>
					</Grid>

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
				</Grid>

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
			</Grid>
		</form>
	);
};

export default App;
