import "./styles.css";

export const Logout = () => {
  return (
    <div className="logout-icon" aria-label="Logout">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25 24.1667V9.58333C6.25 7.75 7.75 6.25 9.58333 6.25H24.5833C26.4167 6.25 27.9167 7.75 27.9167 9.58333"
          className="logout-path"
        />
        <path
          d="M27.9167 30.4166C27.9167 32.25 26.4167 33.75 24.5833 33.75H9.58333C7.75 33.75 6.25 32.25 6.25 30.4166V28.8333"
          className="logout-path"
        />
        <path d="M12.9167 20H32.0833" className="logout-path" />
        <path
          d="M27.9166 25.8333L33.75 20L27.9166 14.1667"
          className="logout-path"
        />
      </svg>
    </div>
  );
};
