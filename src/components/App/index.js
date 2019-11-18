import './index.css';
//framework & 3rd parties
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Translate } from 'react-localize-redux';
// actions
import * as todoActions from "../../actions/todoActions";

// Components

import MainLayout from "../Common/MainLayout"
import Loading from "../Common/Loading"
import TodoList from "../Todo/list"
import TodoForm from "../Todo/form"

class App extends Component {

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();

  }


  onMarkComplete(todo) {
    const { toggleTodo } = this.props;
    toggleTodo(todo); // this will dispatch an action 
  }

  onMarkUnDone(todo) {
    const { toggleTodo } = this.props;
    toggleTodo(todo); // this will dispatch an action 


  }

  addTodo(values, setSubmitting, resetForm) {
    const data = values;
    const { addTodo } = this.props;
    addTodo(data);
    resetForm();
    setSubmitting(false);

  }

  render() {
    const {
      isTodoListFetching
      , itemsCompleted
      , itemsNotCompleted } = this.props;

    return (
      <MainLayout>
        <div className="col-lg-12">
          {isTodoListFetching &&
            <Loading />
          }
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <h1> <Translate id={'Quick Add'} /></h1>
              <TodoForm onSubmit={this.addTodo.bind(this)} />
            </div>
            <div className="col-lg-6">
              <Translate>
                {({ translate }) =>
                  <TodoList
                    title={translate('Tasks Pending')}
                    onMarkComplete={this.onMarkComplete.bind(this)}
                    onMarkUnDone={this.onMarkUnDone.bind(this)}
                    data={itemsNotCompleted} />
                }
              </Translate>

            </div>

            <div className="col-lg-6">
              <Translate>
                {({ translate }) =>
                  <TodoList title={translate(`Task Completed`)}
                    onMarkComplete={this.onMarkComplete.bind(this)}
                    onMarkUnDone={this.onMarkUnDone.bind(this)}
                    data={itemsCompleted} />}
              </Translate>

            </div>
          </div>
        </div>

      </MainLayout>
    );
  }

}


//#region MapStateToProps
// Used to pass data from store/state to Component
// This function returns an object which can be accesed inside the Component via props property
function mapStateToProps(state, props) {
  const isTodoListFetching = state.todo.metadata.isFetching
  const itemsCompleted = state.todo.data.filter(x => x.isComplete === true)
  const itemsNotCompleted = state.todo.data.filter(x => x.isComplete === false)
  return {
    isTodoListFetching,
    itemsCompleted,
    itemsNotCompleted

  };
}
//#endregion

//#region MapDispatchToProps
// Used to map Actions to Component properties
// This function returns an object which can be accesed inside the Component via props property
const mapDispatchToProps = {
  fetchTodos: todoActions.fetchTodos,
  toggleTodo: todoActions.toggleTodoComplete,
  addTodo: todoActions.addTodo,
};
//#endregion

//#region Export Component
export default connect(
  mapStateToProps,
  { ...mapDispatchToProps }
)((App));
//#endregion