import Post from "../../Components/Post";
import SideMenu from "../../Components/SideMenu";
const HomePage = () => {
        const token = localStorage.getItem('token');
        // const [books,setRecords] = useState([])
        // const [test,setCourses] = useState([])
      
        // useEffect(() => {
        //   async function getBooks() {
        //   const response = await axios.get('http://127.0.0.1:8000/api/Admin/get_students', {
        //     headers: {
        //       Authorization: "Bearer " + token,
        //     },
        //   });
        //   const data=response.data.user.books
        //   const recs = data.map(data => ({
        //     id: data.id,
        //     email: data.email,
        //     first_name: data.first_name,
        //     last_name: data.last_name,
        //     courses:data.courses
        //   }));
        
        //   setCourses(test)
        //   setRecords(recs)
        //   console.log(recs.courses)
        //   console.log(records)
        // }
        // getStudents()},[])
    return (
        <>
           <SideMenu/>
           <Post/>
       </>
    );
}
export default HomePage;