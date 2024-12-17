import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StudentForm from './components/StudentForm';
import Table from './components/Table';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Students from './pages/student/Students';
import Fees from './pages/Fees';
import ManageUsers from './pages/ManageUsers';
import StaffDashboard from './pages/officestaff/StaffDashboard';
// import LibrarianDashboard from './pages/librarian/LibraryDashboard';
// import LandingPage from './pages/LandingPage';
import ChooseUser from './components/ChooseUser';
import Home from './components/Home';
import AdminRegister from './components/AdminRegister';
import AdminSignIn from './components/AdminSignIn';
import TeacherSignIn from './components/TeacherSignIn';
import StudentSignIn from './components/StudentSignIn';
// import LibraryDashboard from './pages/librarian/LibraryDashboard';


import AdminDashboard from './pages/admin/AdminDashboard ';
import Announcement from './pages/admin/Announcement';
import Assignment from './pages/admin/Assignment';
import Attendance from './pages/admin/Attendance';
import Classes from './pages/admin/classes';
import Exam from './pages/admin/Exam';
import EventCalendar from './pages/admin/EventCalendar';
import Library from './pages/admin/Library';
import Performance from './pages/admin/Performance';
import Student from './pages/admin/Student';
import Teacher from './pages/admin/Teacher';
import SettingsProfile from './pages/admin/SettingsProfile';



import AnnouncementSection from './pages/student/AnnoucementSection';
import AttendanceSection from './pages/student/AttendanceSection';
import ExamSection from './pages/student/Examsection';
import LibrarySection from './pages/student/LibrarySection';
import PerformanceSection from './pages/student/PerformanceSection';
import ProfileSection from './pages/student/ProfileSection';
import StudentAssignments from './pages/student/StudentAssignments';
import StudentDashboard from './pages/student/StudentDashboard';


import AssignmentSection from './pages/teacher/AssignmentSection';
import CheckAnnouncementSection from './pages/teacher/CheckAnnouncementSection';
import CheckAttendanceSection from './pages/teacher/CheckAttendanceSection';
import CheckExamSection from './pages/teacher/CheckExamSection';
import CheckPerformanceSection from './pages/teacher/CheckPerformanceSection';
import ClassSection from './pages/teacher/Classection';
import EventSection from './pages/teacher/EventSection';
import StudentSection from './pages/teacher/StudentSection';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherProfileSection from './pages/teacher/TeacherProfileSection';
import TeacherSection from './pages/teacher/TeacherSection';




import Books from './pages/librarian/Books';
import BorrowRequests from './pages/librarian/BorrowRequests';
import LibraryDashboard from './pages/librarian/LibraryDashboard';
import Members from './pages/librarian/Members';
import Returns from './pages/librarian/Returns';
import Reports from './pages/librarian/Reports';




import StaffLogin from './pages/officestaff/StaffLogin';
import StaffRegister from './pages/officestaff/Register';



function App() {
  return (
    <Router>
      {/* <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar /> */}
          <div className="p-6">
            <Routes>
              {/* Landing Page */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="choose-user" element={<ChooseUser />} />
        <Route path="admin-signIn" element={<AdminSignIn />} />
        <Route path="student-signIn" element={<StudentSignIn />} />
        <Route path="teacher-signIn" element={<TeacherSignIn />} />
        <Route path="libraryDashboard" element={<LibraryDashboard />} />


        /staff/register

        <Route path="/staff/register" element={<StaffRegister />} />
        <Route path="/staff-signIn" element={<StaffLogin />} />




        
        {/* All the dashboard routes */}

        <Route  path="/admin/dashboard" element={<AdminDashboard />} />
          <Route  path="/teacher/dashboard" element={<TeacherDashboard />} />         
        <Route  path="/student/dashboard" element={<StudentDashboard />} /> 

  
        {/* Admin section here */}

        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teacher />} />
        <Route exact path="/admin/students" element={<Student />} />
        <Route exact path="/admin/assignments" element={<Assignment />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalendar />} />
         <Route exact path="/admin/settings" element={<SettingsProfile />} /> 

   {/* Students sections here  */}

   <Route exact path="/student/assignments" element={<StudentAssignments />} />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/performance" element={<PerformanceSection />} />
        <Route exact path="/student/attendance" element={<AttendanceSection />} />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route exact path="/student/communication" element={<AnnouncementSection/>} />
        <Route exact path="/student/settings" element={<ProfileSection />} />


 {/* Teachers sections here */}
 <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />


{/* Library sections here */}

<Route exact path="/library/books" element={<Books />} />
<Route exact path="/library" element={<LibraryDashboard />} />
<Route exact path="/library/members" element={<Members />} />
<Route exact path="/library/borrow-requests" element={<BorrowRequests />} />
<Route exact path="/library/returns" element={<Returns />} />
<Route exact path="/library/reports" element={<Reports/>} />




              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/students" element={<Students />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/library" element={<Library />} />
              <Route path="/students/add" element={<StudentForm />} />
              {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        
        {/* Office Staff Routes */}
        <Route path="/staff" element={<StaffDashboard />} />
        
        {/* Librarian Routes */}
        {/* <Route path="/librarian" element={<LibrarianDashboard />} /> */}
              {/* Add other routes as needed */}
            </Routes>
          </div>
        {/* </div>
      </div> */}
    </Router>
  );
}

export default App;
