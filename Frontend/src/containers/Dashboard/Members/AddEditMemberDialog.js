import React, { useState } from "react";

import {
   Button,
   Container,
   FlexRow,
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import Input from "../../../components/input";
import Selector from "../../../components/Selector";

export default function AddMemberDialog({
   isEdit = false,
   handleClose,
   show,
   data,
}) {
   const [firstName, setFirstName] = useState(
      isEdit && data && data.firstName ? data.firstName : ""
   );
   const [middleName, setMiddleName] = useState(
      isEdit && data && data.middleName ? data.middleName : ""
   );
   const [lastName, setLastName] = useState(
      isEdit && data && data.lastName ? data.lastName : ""
   );
   const [nic, setNic] = useState(isEdit && data && data.nic ? data.nic : "");
   const [contactNumber, setContactNumber] = useState(
      isEdit && data && data.contactNumber ? data.contactNumber : ""
   );
   const [address, setAddress] = useState(
      isEdit && data && data.address ? data.address : ""
   );
   const [userType, setUserType] = useState(
      isEdit && data && data.userType ? data.userType : ""
   );

   const clearInput = () => {
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setContactNumber("");
      setAddress("");
      setNic("");
      setUserType("");
   };

   const sendDone = () => {
      if (
         firstName !== "" &&
         lastName !== "" &&
         middleName !== "" &&
         contactNumber !== "" &&
         address !== "" &&
         nic !== "" &&
         userType !== ""
      ) {
         const data = {
            nic,
            firstName,
            middleName,
            lastName,
            contactNumber,
            address,
            userType,
         };
         clearInput();
         handleClose(true, data);
      } else if (firstName === "") {
         window.alert(
            `Please enter a first name to ${isEdit ? "edit" : "add"}.`
         );
      } else if (middleName === "") {
         window.alert(
            `Please enter a middle name to ${isEdit ? "edit" : "add"}.`
         );
      } else if (lastName === "") {
         window.alert(
            `Please enter a last name to ${isEdit ? "edit" : "add"}.`
         );
      } else if (contactNumber === "") {
         window.alert(
            `Please enter a contact number to ${isEdit ? "edit" : "add"}.`
         );
      } else if (address === "") {
         window.alert(`Please enter a address to ${isEdit ? "edit" : "add"}.`);
      }else{
            window.alert(`Please select a user type to ${isEdit ? "edit" : "add"}.`);
      }
   };

   const sendCancel = () => {
      !isEdit && clearInput();
      handleClose(false, null);
   };

   return (
      <Modal show={show}>
         <DialogBox>
            <h2>{`${isEdit ? "Edit" : "Add"} member`}</h2>
            <p>Enter the below details of the member</p>
            <Container alignItems="center" disableFullWidth>
               <table>
                  <tbody>
                     <tr>
                        <td>
                           <Input
                              label={"First Name"}
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              minLength="1"
                           />
                        </td>
                        <td>
                           <Input
                              label={"Middle Name"}
                              value={middleName}
                              onChange={(e) => setMiddleName(e.target.value)}
                              type="text"
                              id="middleName"
                              name="middleName"
                              required
                              minLength="1"
                           />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <Input
                              label={"Last Name"}
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              minLength="1"
                           />
                        </td>
                        <td>
                           <Selector
                              label={"User Type"}
                              value={userType}
                              onChange={(e) => setUserType(e.target.value)}
                              id="userType"
                              name="userType"
                           />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <Input
                              label={"National Identity Card Number"}
                              value={nic}
                              onChange={(e) => setNic(e.target.value)}
                              type="text"
                              id="nic"
                              name="nic"
                              required
                              minLength="1"
                           />
                        </td>
                        <td>
                           <Input
                              label={"Contact Number"}
                              value={contactNumber}
                              onChange={(e) => setContactNumber(e.target.value)}
                              type="text"
                              id="conatctNumber"
                              name="contactNumber"
                              required
                              minLength="1"
                           />
                        </td>
                     </tr>
                  </tbody>
               </table>
               <Input
                  label={"Address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="address"
                  name="address"
                  required
                  minLength="1"
               />
            </Container>
            <FlexRow>
               <Button onClick={sendDone}>Done</Button>
               <Button onClick={sendCancel} color="secondary">
                  Cancel
               </Button>
            </FlexRow>
         </DialogBox>
      </Modal>
   );
}
