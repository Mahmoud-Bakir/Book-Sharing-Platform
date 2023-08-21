import  './style.css';

const Partition=({Name,Itype,onChange,holder},)=>{  
    return(
    <div className="part">
        <input name={Name} type={Itype} onChange={onChange} placeholder={holder} required/>
    </div>
    );
}
export default Partition;
