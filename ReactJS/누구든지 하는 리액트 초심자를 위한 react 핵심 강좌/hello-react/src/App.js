import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;

  state = {
    information: [],
  };
  // push가 아닌 concat으로 불변성을 지켜줘야한다
  // handleCreate = (data) => {
  //   this.setState({
  //     information: this.state.information.concat(data),
  //   });
  // };
  // handleCreate를 조금 더 간단하게 표현해보자
  handleCreate = (data) => {
    const { information } = this.state;
    // 비구조화 할당을 사용하면 아래와 같이 더 짧은 코드를 구현도 가능하다
    // id는 고유한 값 넣기
    this.setState({
      information: information.concat(
        Object.assign({}, data, {
          id: this.id++,
        })
      ),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
