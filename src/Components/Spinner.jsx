import { ClipLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '100px auto',

}

const Spinner = ( {loading} ) => {
    return (
        <ClipLoader
        color="indigo" 
        loading={loading}
        cssOverride={override}
        size={150}
        />
    )
}

export default Spinner