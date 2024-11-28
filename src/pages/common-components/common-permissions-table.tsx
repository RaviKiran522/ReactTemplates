import React, { useState } from "react";

const PermissionsTable = ({ actions = [], roles = [], checkboxhandler = () => {} }: any) => {
  const [localRoles, setLocalRoles] = useState<any[]>(roles); // Local state for roles
  const [isChanged, setIsChanged] = useState<boolean>(false);

  // Handle checkbox changes
  const handleCheckboxChange = (roleId: any, permissionType: any) => {
    const updatedRoles = localRoles.map((role: any) =>
      role.id === roleId
        ? {
            ...role,
            permissions: {
              ...role.permissions,
              [permissionType]: !role.permissions[permissionType],
            },
          }
        : role
    );
    setLocalRoles(updatedRoles); // Update local roles state
    setIsChanged(true); // Mark changes as made
  };

  // Save the updated roles
  const handleSave = () => {
    checkboxhandler(localRoles); // Send updated roles to parent
    // alert("Permissions saved successfully!");
    setIsChanged(false); // Reset change tracking
  };

  return (
    <div style={{ margin: "auto", padding: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", backgroundColor: "#4680FF", color: "#fff", padding: "8px" }}>
              Permissions
            </th>
            {actions.map((each: any, index: any) => (
              <th key={index} style={{ backgroundColor: "#4680FF", color: "#fff", padding: "8px" }}>
                {each.action}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {localRoles.map((role: any) => (
            <tr key={role.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{role.name}</td>
              {Object.keys(role.permissions).map((permission: any) => (
                <td
                  key={permission}
                  style={{ textAlign: "center", padding: "8px", border: "1px solid #ddd" }}
                >
                  <input
                    type="checkbox"
                    checked={role.permissions[permission]}
                    onChange={() => handleCheckboxChange(role.id, permission)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button
          onClick={handleSave}
          disabled={!isChanged}
          style={{
            padding: "10px 20px",
            backgroundColor: isChanged ? "#007BFF" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: isChanged ? "pointer" : "not-allowed",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PermissionsTable;
