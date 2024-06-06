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
	console.log('formData', formData);

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
		// const formElement = formRef.current;
		const formElement = document.getElementById('main');

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
			<Grid>
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
						style={{
							marginTop: '-70px',
							paddingBottom: '20px',
							textAlign: 'center',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						gutterBottom
					>
						<Grid item xs={12}>
							<img
								src="/images/parent-form/logo.png"
								alt="Minh Anh Logo"
								style={{
									height: '300px',
									width: '300px',
								}}
							/>
						</Grid>

						<Grid item xs={12} style={{ marginTop: '-80px' }}>
							<Typography variant="caption1" fontWeight={600}>
								Hotline/ Zalo: 094 510 71 10 <br />
								Đường Lê Thanh Nghị, tổ 2, khu 6 - Huyện Côn Đảo, tỉnh Bà Rịa -
								Vũng Tàu
							</Typography>
						</Grid>
					</Grid>

					<Grid item container xs={12} id="title">
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
					</Grid>

					<Grid item container xs={12} id="part-i">
						<Typography variant="h6" gutterBottom>
							I. Thông tin học viên (Student&apos;s information)
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
							label="Địa chỉ / Address"
							margin="normal"
							name="address"
							value={formData.address}
							onChange={handleChange}
						/>
					</Grid>

					<Typography variant="h6" gutterBottom>
						II. Thông tin Phụ huynh (Parent&apos;s information)
					</Typography>
					<TextField
						fullWidth
						label="Tên phụ huynh / Parent's name"
						margin="normal"
						name="parentName"
						value={formData.parentName}
						onChange={handleChange}
					/>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								fullWidth
								label="Số điện thoại 1 / Phone number 1"
								margin="normal"
								name="phone1"
								value={formData.phone1}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								label="Số điện thoại 2 / Phone number 2"
								margin="normal"
								name="phone2"
								value={formData.phone2}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<TextField
						fullWidth
						label="Chữ ký xác nhận / Signature"
						margin="normal"
						name="signature"
						value={formData.signature}
						onChange={handleChange}
					/>

					<Typography variant="h6" gutterBottom>
						III. Thông tin lớp đăng ký (Class information)
					</Typography>
					<TextField
						fullWidth
						label="Tên lớp / Class name"
						margin="normal"
						name="className"
						value={formData.className}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Lịch học (Số buổi / tháng) / Class schedule (Number of classes / month)"
						margin="normal"
						name="classSchedule"
						value={formData.classSchedule}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Học phí / Fee"
						margin="normal"
						name="fee"
						value={formData.fee}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Bắt đầu học từ ngày / Start date"
						margin="normal"
						name="startDate"
						value={formData.startDate}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item container justifyContent={'center'} xs={12}>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ mt: 2 }}
					>
						Nộp phiếu
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default App;
