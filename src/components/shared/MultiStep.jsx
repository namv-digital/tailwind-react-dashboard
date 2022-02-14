import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default class MultiStep extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  next = (values) => {
    const newPageNo = Math.min(
      this.state.page + 1,
      this.props.children.length - 1
    );
    this.setState({
      page: newPageNo,
      values,
    });
    this.props.updatePageNo(newPageNo);
  };

  previous = () => {
    const newPageNo = Math.max(this.state.page - 1, 0);
    this.setState({
      page: newPageNo,
    });
    this.props.updatePageNo(newPageNo);
  };

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        mutators={{
          ...arrayMutators,
        }}
      >
        {({ handleSubmit, submitting, values, form: { getState } }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="px-0 mt-10 flex justify-between">
              <div className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  onClick={this.previous}
                  className={classNames(
                    page > 0 ? " inline-flex " : "hidden",
                    !isLastPage ? "" : "rounded-r-md",
                    "relativeitems-center px-4 py-2.5 rounded-l-md border border-gray-300 bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white focus:z-10 focus:outline-none"
                  )}
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={this.next}
                  className={classNames(
                    !isLastPage ? "inline-flex" : "hidden",
                    page > 0 ? "" : "rounded-l-md",
                    "-ml-px relative items-center px-4 py-2.5 rounded-r-md border border-gray-300 bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white focus:z-10 focus:outline-none"
                  )}
                >
                  Next
                </button>
              </div>
              {isLastPage && (
                <button
                  type="button"
                  className={classNames(
                    "-ml-px relative inline-flex items-center px-4 py-2.5 rounded-md border border-gray-300 bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white focus:z-10 focus:outline-none"
                  )}
                >
                  Submit
                </button>
              )}
            </div>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      </Form>
    );
  }
}
