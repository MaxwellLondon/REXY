import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class firebaseFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };

    this.db = firebase.firestore();
    this.usersRef = this.db.collection('users');
  }

  handleChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  storeUserList = async () => {
    const { userId } = this.state;
    const { userList } = this.props;

    if (userId) {
      await this.usersRef.doc(userId).set({ userList });
    }
  };

  render() {
    const { userId } = this.state;

    return (
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          id="userId"
          value={userId}
          onChange={this.handleChange}
        />
        <button onClick={this.storeUserList}>Store User List</button>
      </div>
    );
  }
}

export default firebaseFunc;

// to use this compondent use :
//
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import FirestoreUserList from './FirestoreUserList';

// const userList = [
//   // Your userList data structure
// ];

// ReactDOM.render(
//   <React.StrictMode>
//     <FirestoreUserList userList={userList} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
