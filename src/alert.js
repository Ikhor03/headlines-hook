import { Alert } from "react-bootstrap"

const NotFound = (props) => {
    return(
        <Alert key='dark' variant='dark' className={`text-center ${props.hide}`}>
          Data yang anda cari tidak ditemukan
        </Alert>
    )
}
const Loading = () => {
    return(
        <Alert key='dark' variant='dark' className="text-center">
          Loading...
        </Alert>
    )
}

export default NotFound;
export {Loading};