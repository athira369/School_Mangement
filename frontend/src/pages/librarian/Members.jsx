import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../redux/actions/memberActions";
import Sidebar from "./Sidebar"; // Import your Sidebar component
import {
  MembersContainer,
  Title,
  TableContainer,
  StyledTable,
  NoMembersMessage,
} from "../../styles/MemberStyles"; // Import your styled components

const Members = () => {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.members); // Redux state for members

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Fixed Sidebar */}
      <MembersContainer>
        <Title>Library Members</Title>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(members) && members.length > 0 ? (
                members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No members available.
                  </td>
                </tr>
              )}
            </tbody>
          </StyledTable>
        </TableContainer>
      </MembersContainer>
    </div>
  );
};

export default Members;
