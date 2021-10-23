import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

import Table from "../../../components/Table";
import {
   FluidContainer,
   Button,
   Container,
} from "../../../components/CommonComponents";

import Member from "./Member";
import AddEditMemberDialog from "./AddEditMemberDialog";
import {addMember as addMemberToStore} from "../../../store/memberSlice";

import {addMember} from "../../../api/memberAPI";

const Members = ({ catalog }) => {
   const [selectedMemberId, setSelectedMemberId] = useState(null);
   const [showAddMemberDialog,setShowAddMemberDialog] =useState(false);

   const dispatch = useDispatch();

   const handleTableRowClick = (id) => {
      setSelectedMemberId(id);
   };

   const handleMemberViewBackClick = () => {
      setSelectedMemberId(null);
   };

   const handleAddMember = (confirmed, data) => {
      if (confirmed) {
         addMember(data)
         .then((response)=>{
             console.log(response)
             if(!response.error){
                 dispatch(addMemberToStore(response.data));
             }
         })
         .catch((error)=>{
             console.log(error);
         })
      }
      setShowAddMemberDialog(false);
   };

   return selectedMemberId == null ? (
      <>
         <FluidContainer>
            <Container
               flexDirection="row"
               justifyContent="flex-end"
               alignItems="flex-start"
            >
               <Button
                  rounded
                  onClick={() => setShowAddMemberDialog(true)}
               >
                  <IoAddSharp />
               </Button>
            </Container>
            <Table
               data={catalog}
               handleRowClick={handleTableRowClick}
               instruction="Click row to view member"
            />
         </FluidContainer>
         <AddEditMemberDialog show={showAddMemberDialog} handleClose={handleAddMember} />
      </>
   ) : (
      <Member
         id={selectedMemberId}
         handleBackClick={handleMemberViewBackClick}
      />
   );
};

export default Members;
