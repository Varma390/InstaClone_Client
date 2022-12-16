import React , {useState}from 'react';
import axios from 'axios';
import '../styles/PostDataStyle.css';
import icon from '../images/icon.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from 'react-router-dom';
// import { useEffect } from 'react';


const PostData = () => {

    const [author,finalauthor] = useState('')
    const [location,finallocation] = useState('')
    const [description,finaldescription] = useState('')
    const [imageData,final] = useState('')

    const navigate = useNavigate();

        const handleSubmit = (e) =>{

            e.preventDefault();
            try{
                // axios.post('http://httpbin.org/post',intialData, {
                // const data1 = [imageData,intialData]
                    const data = new FormData();
                    // data.append("intialData",JSON.stringify(intialData))
                    // data.append("intialData",intialData)

                    data.append("imageData1",imageData)
                    // data.append("filename",imageData.name)
                    data.append("author1",author)
                    data.append("location1",location)
                    // data.append("imageName",imageName)

                    data.append("description1",description)

                axios.post('http://localhost:3000/PostData',data)
                .then(res =>{
                    console.log(res)
                    navigate('/PostView')
                } )
                .catch(err => console.log(err))
                // axios.post('http://localhost:3000/PostData',{imageData,intialData},{
                //     headers: {
                //         'Content-Type': 'multipart/form-data' ,               
                //     }})
                // .then(res => console.log(res))
                // .catch(err => console.log(err))

            } catch(err) {
                console.log(err);
            }
             
        }
  

    return(
        <>
         <div className='page'>
         <div className="topBox">
                <div className='pics'>
                    <img src={icon} alt='app icons' />
                </div>
                <p className='heading'>Instaclone</p>
            </div>
            <div className='line'></div>
        <div className="container2">
{/* // In the form tag, the enctype attribute must be set to multipart/form-data, for Multer to work */}
{/* types of encoding - While multipart or form-data allows the files to be included in the form data, text/ plain sends the data as plain text without encoding. It is used for debugging and not for production. The application/x-www-form-urlencoded encodes the data as query string – separating key – value pairs assigned with “ = “ and other symbols like “&.” */}
            <form onSubmit={handleSubmit}  >
{/* Also, in the form tag, we have specified the action attribute to #. This is because we haven’t made any API endpoint to receive the data from this form. we will create that in backend */}
                <div>
                    {/* <input className="form-control mb-3" type="text" placeholder='No file choosen' /> */}
                    <input className="form-control mb-3" type="file" id="postData" name='imageData'  
                    onChange={e => { 
                        // finalData({...intialData, imageData: e.target.files})
                        // finalData({...intialData, e.target.files[0]},
                        // finalimageName(e.target.files[0].name)
                        final(e.target.files[0])
                        } }
                            accept=".png, .jpg, .jpeg" />
                </div>
        <div>
            <input className="form-control mb-3" type="text" placeholder="Author" name='author' 
            onChange={(e) =>{
 finalauthor(e.target.value)
// //  finalData({...intialData, name: e.target.value})
}} 
/>
        </div>

        <div>
            <input className="form-control mb-3" type="text" placeholder="Location" name="location" 
            onChange={(e) =>{
                 finallocation(e.target.value)
//  finalData({...intialData, location: e.target.value})
}}
/>
        </div>
        <div>
        <input className="form-control mb-3" type="text" placeholder="Description" name='description' 
        onChange={(e) =>{
finaldescription( e.target.value)
// finalData({...intialData, description: e.target.value}) 
} } 
/>

        </div>
        {/* <Link to='/PostView'><button type="submit"  >Post</button></Link> */}
       <div className="button">
       <button type="submit" className="btn btn-success">Post</button>
        </div> 
        
            </form>
        </div>
        </div>
        </>
    )
}


export default PostData;