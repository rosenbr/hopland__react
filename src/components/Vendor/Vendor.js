import React from 'react';
// import ListItems from '../ListItems/ListItems';
import MyContext from '../MyContext/MyContext';
import './Vendor.css';

const Vendor = () => {
    // <MyContext.Consumer>
    //     {context => (
    //         <React.Fragment>
    //             <h1>Test</h1>
    //             {Object.keys(context.vendors).map(id => (
    //                 <Vendor 
    //                     key={id}
    //                     title={context.vendors[id].title}
    //                 />
    //             ))}
    //         </React.Fragment>
    //     )}
    // </MyContext.Consumer>

    // const vendorDetails = React.useContext(VendorContext);
    // const setVendorDetails = useContext(VendorDispatchContext);

    // const [vendorsList, setVendorsList] = useState([])

    // { id, title, hours, phone, blurb }
    // useEffect(() => {
    //     setVendorsList([vendors]);
    //   console.log("vendorsList", vendorsList)
    // }, []);

    // return (
    //         <div className="hop__vendor">
    //             <div className="vendor__info">
    //                 <h3 className="vendor__info" key={id}>{this.name}</h3>
    //                 {/* <h3 className="vendor__info">{hours}</h3> */}
    //                 {/* <h3 className="vendor__info">{phone}</h3> */}
    //                 {/* <h3 className="vendor__info">{blurb}</h3> */}
    //             </div>
    //         </div>
    // )

    // === | Test data set and return | ===
        const data = 
            {
                id: 1,
                title: "Nelson",
                phone: "(555)555-5555",
                hours: "M-F, 9 AM to 5 PM",
                blurb: "Dummy blurb text"
            }

        return (
            <div className="hop__vendor">
                <h3 className="vendor__pic">Pic</h3>
                <div className="vendor__info">
                    <h3 className="vendor__info">{data.title}</h3>
                    <h3 className="vendor__info">{data.hours}</h3>
                    <h3 className="vendor__info">{data.phone}</h3>
                    <h3 className="vendor__blurb">{data.blurb}</h3>
                </div>
            </div>
    )
}

export default Vendor;