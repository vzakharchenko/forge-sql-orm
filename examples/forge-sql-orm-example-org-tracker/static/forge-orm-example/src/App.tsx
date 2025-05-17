import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import styles from "./App.module.css";

interface User {
  users: {
    id: number;
    name: string;
    organizationId: number;
  };
  organization: {
    id: number;
    name: string;
  };
}

interface Organization {
  id: number;
  name: string;
}

interface UserStats {
  totalUsers: number;
  orgBreakdown: {
    [key: number]: number;
  };
}

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.spinnerInner}></div>
  </div>
);

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrg, setSelectedOrg] = useState<number | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [newUserName, setNewUserName] = useState("");
  const [newUserOrg, setNewUserOrg] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingUser, setIsAddingUser] = useState(false);

  const fetchUsers = async () => {
    try {
      const result = await invoke("getUsers", {
        searchTerm: searchTerm || undefined,
        organizationId: selectedOrg || undefined,
      }) as User[];
      setUsers(result);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOrganizations = async () => {
    try {
      const result = await invoke("getOrganizations") as Organization[];
      setOrganizations(result);
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  };

  const fetchStats = async () => {
    try {
      const result = await invoke("getUserStats") as UserStats;
      setStats(result);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      await Promise.all([fetchUsers(), fetchOrganizations(), fetchStats()]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [searchTerm, selectedOrg]);

  const handleAddUser = async () => {
    if (!newUserName || !newUserOrg) return;
    setIsAddingUser(true);
    try {
      await invoke("createUser", {
        name: newUserName,
        organizationId: newUserOrg,
      });
      setNewUserName("");
      setNewUserOrg(null);
      setShowAddForm(false);
      await loadData();
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setIsAddingUser(false);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>OrgTracker</h1>
      </header>

      <div className={styles.controls}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="🔍 Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <select
            value={selectedOrg || ""}
            onChange={(e) => setSelectedOrg(e.target.value ? Number(e.target.value) : null)}
            className={styles.orgSelect}
          >
            <option value="">All Organizations</option>
            {organizations.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name} ({stats?.orgBreakdown[org.id] || 0})
              </option>
            ))}
          </select>
        </div>
        <button
          className={styles.addButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Cancel" : "+ Add User"}
        </button>
      </div>

      {showAddForm && (
        <div className={styles.addForm}>
          <input
            type="text"
            placeholder="User Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className={styles.input}
            disabled={isAddingUser}
          />
          <select
            value={newUserOrg || ""}
            onChange={(e) => setNewUserOrg(Number(e.target.value))}
            className={styles.select}
            disabled={isAddingUser}
          >
            <option value="">Select Organization</option>
            {organizations.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
          <button 
            onClick={handleAddUser} 
            className={styles.submitButton}
            disabled={!newUserName || !newUserOrg || isAddingUser}
            style={{ 
              opacity: (!newUserName || !newUserOrg || isAddingUser) ? 0.5 : 1,
              cursor: (!newUserName || !newUserOrg || isAddingUser) ? 'not-allowed' : 'pointer'
            }}
          >
            {isAddingUser ? (
              <>
                <Spinner />
                <span style={{ marginLeft: '8px' }}>Adding...</span>
              </>
            ) : (
              'Add User'
            )}
          </button>
        </div>
      )}

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>👤 User Name</th>
              <th>🏢 Organization</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.users.id}>
                <td>{user.users.name}</td>
                <td>{user.organization.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.stats}>
        <p>Total Users: {stats?.totalUsers || 0}</p>
      </div>
    </div>
  );
}

export default App;
