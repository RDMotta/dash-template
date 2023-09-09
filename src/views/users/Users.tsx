import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "../../components/Header";
import GridView from "../../components/GridView"; 
import UserService from "../../service/user/UserService";
import IUser from "../../types/user.type";
 
const Users = () => {   
    
    const [users, setUserList] = useState<IUser[]>([]);

    useEffect(() => {         
        UserService.getAll()
        .then((response) => {
            setUserList(response.data)
        })
        .catch(e =>[])
    }, []);

    interface Column {
        id: string;
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: Column[] = [
        { id: 'name', label: 'Nome', minWidth: 170 },
        { id: 'document', label: 'Documento', minWidth: 100, align: 'right' },
        { id: 'state', label: 'Estado civil', minWidth: 170, align: 'right' },
        { id: 'age', label: 'Idade', minWidth: 70, align: 'right' },
        { id: 'ocupation', label: 'Cargo', minWidth: 170 },
      ];

    return (         
        <Container maxWidth="lg">   
            <Header title="Usuários"/> 
            <GridView
             columns= {columns}
             rows={ users }
             rowsPerPageOptions={[5, 10, 20, 50, 100]}            
            />
        </Container>  
    );
  };
  
  export default Users;