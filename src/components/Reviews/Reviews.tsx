import React from "react";
import Pagination from "./Pagination";
import ReviewItem from "./ReviewItem";
import "./style.scss";

const PageSize = 10;

class Reviews extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      currentPage: 1,
      pageData: this.getPageData(1),
    };

    this.getPageData = this.getPageData.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  componentDidUpdate(prevProps: PropTypes) {
    if (prevProps.data !== this.props.data) {
      this.setCurrentPage(1);
    }
  }

  setCurrentPage(pageNumber: number) {
    this.setState({
      currentPage: pageNumber,
      pageData: this.getPageData(pageNumber),
    });
  }

  getPageData(currentPage: number) {
    const {
      data,
    } = this.props;
  
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    
    return data.slice(firstPageIndex, lastPageIndex);
  }

  render() {
    const {
      currentPage,
      pageData,
    } = this.state;

    const {
      data,
    } = this.props;

    return (
      <div className="reviews-container">
        <div>
          {
            pageData.map((reviewId) => (
              <ReviewItem
                key={reviewId}
                id={reviewId}
              />
            ))
          }
        </div>

        <Pagination
          currentPage={currentPage}
          total={data.length}
          pageSize={PageSize}
          onPageChange={this.setCurrentPage}
        />
      </div>
    )
  }
}

type PropTypes = {
  data: string[];
}

type StateTypes = {
  currentPage: number;
  pageData: string[];
}

export default Reviews;
