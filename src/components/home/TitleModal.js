// import { React, Component } from 'react';
// import { connect } from 'react-redux';
// import { searchTitleByID } from '../../actions/searchActions';

// export class TitleModal extends Component {

//     componentDidMount() {
//         // this.props.searchTitleByID(this.props.id)
//     }
    
//     render() {  
        
//         const Modal = ({ handleClose, show, children }) => {
//             const showHideClassName = show ? "modal display-block" : "modal display-none"; 
//         } 
//         return (

//           <div className={showHideClassName}>
//             <section className="modal-main">
//               {children}
//               <button type="button" onClick={handleClose}>
//                 Close
//               </button>
//             </section>
//           </div>
//         )
//     }   
// }



//         // return (
//         //     <div>
//         //         <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//         //             <div className="modal-dialog modal-dialog-centered" role="document">
//         //                 <div className="modal-content">
//         //                 <div className="modal-header">
//         //                     <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
//         //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//         //                     <span aria-hidden="true">&times;</span>
//         //                     </button>
//         //                 </div>
//         //                 <div className="modal-body">
//         //                     ...
//         //                 </div>
//         //                 <div className="modal-footer">
//         //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         //                     <button type="button" className="btn btn-primary">Save changes</button>
//         //                 </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // )

// // const mapStateToProps = state => ({
// //     title: state.titles.title
// // });

// // export default connect(mapStateToProps, {searchTitleByID})(TitleModal)}
// export default TitleModal