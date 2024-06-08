const duration = '90 phút/ buổi, 12 buổi/ tháng';
const classSchedule246 = 'Thứ 2 - 4 - 6';
const classSchedule245 = 'Thứ 2 - 4 - 5';
const classSchedule357 = 'Thứ 3 - 5 - 7';
const classScheduleExpress = 'Thứ 2 - 4 - 6 - 7 - Chủ Nhật';
const classSchedule36cn = 'Thứ 3 - 6 - Chủ Nhật';
const classSchedule47cn = 'Thứ 4 - 7 - Chủ Nhật';

const fee750 = '750.000đ /tháng';
const fee825 = '825.000đ /tháng';
const fee900 = '900.000đ /tháng';
const fee1000 = '1.000.000đ /tháng';
const fee1080 = '1.080.000đ /tháng';
const fee1130 = '1.130.000đ /tháng';
const fee1170 = '1.170.000đ /tháng';
const fee1440 = '1.440.000đ /tháng';
const fee1850 = '1.850.000đ /tháng';

const classTime47cn = 'Thứ 4: 19:00 - 20:30, Thứ 7 & Chủ Nhật: 17:00 - 18:30';
const classTime14 = '14:00 - 15:30';
const classTime1545 = '15:45 - 17:15';
const classTime800 = '8:00 - 9:30';
const classTime830 = '8:30 - 10:00';
const classTime845 = '8:45 - 10:15';
const classTime945 = '9:45 - 11:15';
const classTime1010 = '10:10 - 11:40';

const classTable = [
	{
		id: 1,
		class: 'Lớp 1',
		classInformation: [
			{
				className: 'Star 1',
				classSchedule: classSchedule47cn,
				classTime: classTime47cn,
				classDuration: duration,
				fee: fee750,
				classStartDate: '12/6/2024',
			},
		],
	},
	{
		id: 2,
		class: 'Lớp 2',
		classInformation: [
			{
				className: 'Star 2',
				classSchedule: classSchedule246,
				classTime: classTime1545,
				classDuration: duration,
				fee: fee750,
				classStartDate: '17/6/2024',
			},
		],
	},
	{
		id: 3,
		class: 'Lớp 3',
		classInformation: [
			{
				className: 'Moon 1',
				classSchedule: classSchedule36cn,
				classTime: classTime14,
				classDuration: duration,
				fee: fee825,
				classStartDate: '18/6/2024',
			},
		],
	},
	{
		id: 4,
		class: 'Lớp 4 - 5',
		classInformation: [
			{
				className: 'Moon 2',
				classSchedule: classSchedule246,
				classTime: classSchedule245,
				classDuration: duration,
				fee: fee825,
				classStartDate: '17/6/2024',
			},
		],
	},
	{
		id: 5,
		class: 'Lớp 6',
		classInformation: [
			{
				className: 'Sun 1',
				classSchedule: classSchedule357,
				classTime: classTime1545,
				classDuration: duration,
				fee: fee900,
				classStartDate: '18/6/2024',
			},
		],
	},
	{
		id: 6,
		class: 'Lớp 7',
		classInformation: [
			{
				className: 'Sun 2',
				classSchedule: classSchedule357,
				classTime: classTime14,
				classDuration: duration,
				fee: fee1080,
				classStartDate: '18/6/2024',
			},
		],
	},
	{
		id: 7,
		class: 'Lớp 8 - 9',
		classInformation: [
			{
				className: 'Sun 3',
				classSchedule: classSchedule246,
				classTime: classTime1545,
				classDuration: duration,
				fee: fee1080,
				classStartDate: '01/7/2024',
			},
		],
	},
	{
		id: 8,
		class: 'Lớp 10',
		classInformation: [
			{
				className: 'B2',
				classSchedule: classSchedule357,
				classTime: classTime1545,
				classDuration: duration,
				fee: fee1130,
				classStartDate: '02/7/2024',
			},
		],
	},
	{
		id: 9,
		class: 'Lớp 11 - 12',
		classInformation: [
			{
				className: 'Luyện thi IELTs',
				classSchedule: classSchedule357,
				classTime: classTime830,
				classDuration: duration,
				fee: fee1440,
				classStartDate: '02/7/2024',
			},
			{
				className: 'IELTs cấp tốc 3 tháng',
				classSchedule: classScheduleExpress,
				classTime: classTime845,
				classDuration: duration,
				fee: fee1850,
				classStartDate: '10/6/2024',
			},
		],
	},
	{
		id: 10,
		class: 'Lớp 5 - 8: Luyện thi KET',
		classInformation: [
			{
				className: 'Luyện thi KET 1',
				classSchedule: classSchedule246,
				classTime: classTime800,
				classDuration: duration,
				fee: fee1170,
				classStartDate: '17/6/2024',
			},
			{
				className: 'Luyện thi KET 2',
				classSchedule: classSchedule246,
				classTime: classTime945,
				classDuration: duration,
				fee: fee1170,
				classStartDate: '17/6/2024',
			},
		],
	},
	{
		id: 11,
		class: 'Lớp 6 - 10: Pre-IELts',
		classInformation: [
			{
				className: 'Pre-IELts',
				classSchedule: classSchedule246,
				classTime: classTime1010,
				classDuration: duration,
				fee: fee1000,
				classStartDate: '17/6/2024',
			},
		],
	},
];

export default classTable;
