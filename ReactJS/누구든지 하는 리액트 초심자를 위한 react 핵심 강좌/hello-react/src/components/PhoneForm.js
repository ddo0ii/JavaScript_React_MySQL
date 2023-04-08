import React, { Component } from "react";

class PhoneForm extends Component {
  input = React.createRef();

  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // 등록 버튼 눌러서, 새로고침 되는 것을 방지하기 위해
  //   페이지가 리더링 되는것을 방지하기 위해서
  //   e.preventDefault(); 사용 >> 원래 해야하는 것 안하는 것 >> 값 넣고, 새로고침 해야하는데 안하는 것
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.onCreate({
    //   name: this.state.name,
    //   phone: this.state.phone,
    // });
    // 또는 아래와 같이
    this.props.onCreate(this.state);
    // input 입력 값 초기화
    this.setState({
      name: "",
      phone: "",
    });
    this.input.current.focus();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
          ref={this.input}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}
export default PhoneForm;
