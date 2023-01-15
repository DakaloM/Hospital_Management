import { BrowserRouter as Router, Routes, Route, Outlet, RouterProvider, createBrowserRouter, Navigate  } from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Patients from "./pages/patients/Patients";
import Appointments from "./pages/appointments/Appointments";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./contex/colorContex";
import "./app.scss";
import Queue from "./pages/queue/Queue";
import ViewAppointments from "./components/viewAppointments/ViewAppointments";
import AddAppointmet from "./components/addAppointment/AddAppointmet";
import AddPatient from "./components/addPatient/AddPatient";
import ViewPatients from "./components/viewPatients/ViewPatients";
import ViewQueue from "./pages/queue/viewQueue/ViewQueue";
import AddQueue from "./pages/queue/addQueue/AddQueue";
import Vitals from "./pages/vitals/Vitals";
import BloodDonors from "./pages/bloodDonors/BloodDonors";
import OperationReports from "./pages/operationReports/OperationReports";
import BirthReports from "./pages/birthReport/BirthReports";
import DeathReports from "./pages/deathReports/DeathReports";
import ViewVitals from "./components/viewVitals/ViewVitals";
import AddVitals from "./components/addVitals/AddVitals";
import ViewBloodDonors from "./components/viewBloodDonors/ViewBloodDonors";
import AddBloodDonor from "./components/addBloodDonor/AddBloodDonor";
import ViewOperationReports from "./components/viewOperationReports/ViewOperationReports";
import AddOperationReport from "./components/addOperationReport/AddOperationReport";
import ViewBirthReports from "./components/viewBirthreports/ViewBirthReports";
import AddBirthReport from "./components/addBirthReport/AddBirthReport";
import ViewDeathReports from "./components/viewDeathReports/ViewDeathReports";
import AddDeathReport from "./components/addDeathReport/AddDeathReport";
import Medication from "./pages/medication/Medication";
import ViewMedication from "./components/viewMedication/ViewMedication";
import AddMedication from "./components/addMedication/AddMedication";
import Prescriptions from "./pages/prescriptions/Prescriptions";
import ViewPrescriptions from "./components/viewPrescription/ViewPrescriptions";
import AddPrescription from "./components/addPrescription/AddPrescription";
import Invoices from "./pages/invoices/Invoices";
import ViewInvoices from "./components/viewInvoices/ViewInvoices";
import AddInvoice from "./components/addInvoice/AddInvoice";
import Payments from "./pages/payments/Payments";
import ViewPayments from "./components/viewPayments/ViewPayments";
import AddPayment from "./components/addPayment/AddPayment";
import Pharmacists from "./pages/pharmacists/Pharmacists";
import Nurses from "./pages/nurses/Nurses";
import Doctors from "./pages/doctors/Doctors";
import Receptionists from "./pages/receptionists/Receptionists";
import Accountants from "./pages/accountants/Accountants";

function App() {
  
  const { darkMode } = useContext(DarkModeContext)
  
  const currentUser = true;

  console.log(darkMode)

  const Layout = () => {
    return (

        <div 
          className={darkMode? "theme-dark dark" : "theme-light light"}
            style={{
              display: "flex",
              padding: "0",
              margin: "0",
              justifyContent: "space-between",
              gap: "30px",
            }}
        >
          <Leftbar />
          <div style={{flex: "0.75"}}>
              <Navbar />
              <Outlet />
          </div>
        </div>
      
    )
  }

  const ProtectedRoutes = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: 
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>,

        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/dashboard",
            element: <Dashboard />
          },
          {
            path: "/patients",
            element: <Patients />,
            children: [
              {
                path: "viewPatients",
                element: <ViewPatients />
              },
              {
                path: "addPatient",
                element: <AddPatient />
              },
            ]
          },
          {
            path: "/appointments",
            element: <Appointments />,
            children: [
              {
                path: "viewAppointments",
                element: <ViewAppointments />
              },
              {
                path: "addAppointment",
                element: <AddAppointmet />
              },
            ]
          },
          
          {
            path: "/queue",
            element: <Queue />,
            children: [
              {
                path: "viewQueue",
                element: <ViewQueue />
              },
              {
                path: "addQueue",
                element: <AddQueue />
              },
            ]
          },
          {
            path: "/vitals",
            element: <Vitals />,
            children: [
              {
                path: "viewVitals",
                element: <ViewVitals />
              },
              {
                path: "addVitals",
                element: <AddVitals />
              },
            ]
          },
          {
            path: "/bloodDonors",
            element: <BloodDonors />,
            children: [
              {
                path: "viewDonors",
                element: <ViewBloodDonors />
              },
              {
                path: "addDonor",
                element: <AddBloodDonor />
              },
            ]
          },
          {
            path: "/operationReports",
            element: <OperationReports />,

            children: [
              {
                path: "viewOperationReports",
                element: <ViewOperationReports />
              },
              {
                path: "addOperationReport",
                element: <AddOperationReport />
              },
            ]

            
          },
          {
            path: "/medication",
            element: <Medication />,

            children: [
              {
                path: "viewMedications",
                element: <ViewMedication />
              },
              {
                path: "addMedication",
                element: <AddMedication />
              },
            ]

            
          },
          {
            path: "/prescriptions",
            element: <Prescriptions />,

            children: [
              {
                path: "viewPrescriptions",
                element: <ViewPrescriptions />
              },
              {
                path: "addPrescription",
                element: <AddPrescription />
              },
            ]

            
          },
          {
            path: "/invoices",
            element: <Invoices />,

            children: [
              {
                path: "viewInvoices",
                element: <ViewInvoices />
              },
              {
                path: "addInvoice",
                element: <AddInvoice />
              },
            ]

            
          },
          {
            path: "/payments",
            element: <Payments />,

            children: [
              {
                path: "viewPayments",
                element: <ViewPayments />
              },
              {
                path: "addPayment",
                element: <AddPayment />
              },
            ]

            
          },
          {
            path: "/doctors",
            element: <Doctors />,

            children: [
              {
                path: "viewPayments",
                element: <ViewPayments />
              },
              {
                path: "addPayment",
                element: <AddPayment />
              },
            ]

            
          },
          {
            path: "/receptionists",
            element: <Receptionists />,

            children: [
              {
                path: "viewPayments",
                element: <ViewPayments />
              },
              {
                path: "addPayment",
                element: <AddPayment />
              },
            ]

            
          },
          {
            path: "/accountants",
            element: <Accountants />,

            children: [
              {
                path: "viewPayments",
                element: <ViewPayments />
              },
              {
                path: "addPayment",
                element: <AddPayment />
              },
            ]

            
          },
          {
            path: "/pharmacists",
            element: <Pharmacists />,

            children: [
              {
                path: "viewPayments",
                element: <ViewPayments />
              },
              {
                path: "addPayment",
                element: <AddPayment />
              },
            ]

            
          },
          {
            path: "/nurses",
            element: <Nurses />,

            children: [
              {
                path: "viewPayments",
                element: <ViewPayments />
              },
              {
                path: "addPayment",
                element: <AddPayment />
              },
            ]

            
          },
          {
            path: "/birthReports",
            element: <BirthReports />, 
            children: [
              {
                path: "viewBirthReports",
                element: <ViewBirthReports />
              },
              {
                path: "addBirthReport",
                element: <AddBirthReport />
              },
            ]
          },
          {
            path: "/deathReports",
            element: <DeathReports />,
            children: [
              {
                path: "viewDeathReports",
                element: <ViewDeathReports />
              },
              {
                path: "addDeathReport",
                element: <AddDeathReport />
              },
            ]
          },
        ]
    },
    
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
