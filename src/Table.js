import React,{component} from 'react';


class Table extends React.Component{
    render() {
        const { charactersData,removeCharacter } = this.props;
        const TableHeader = ()=>{
            return(
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Job</td>
                        <td>Remove</td>
                    </tr>
                </thead>
            )
        }
        const TableBody = props =>{
            const rows = props.charactersData.map((row,index)=>{
                return(
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.job}</td>
                        <td><button onClick={()=>props.removeCharacter(index)}>detele</button></td>
                    </tr>
                )
            })
            return(
                <tbody>   
                    {rows}
                </tbody>
            )
        }
       
        return(
            <table>
               <TableHeader/>
               <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
               
            </table>
        )
    }
}
export default Table;