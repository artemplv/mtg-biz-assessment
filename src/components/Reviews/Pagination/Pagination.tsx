import React from "react";
import "./style.scss";

const range = (start: number, end: number) => {
  let length = end - start + 1;
  
  return Array.from({ length }, (_, index) => index + start);
};

const DOTS = '...';

class Pagination extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      paginationRange: this.calculateRange(),
    };

    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.calculateRange = this.calculateRange.bind(this);
  }

  componentDidUpdate(prevProps: PropTypes) {
    if (
      prevProps.currentPage !== this.props.currentPage
      || prevProps.total !== this.props.total
      || prevProps.pageSize !== this.props.pageSize
    ) {
      this.setState({
        paginationRange: this.calculateRange(),
      });
    }
  }

  onNext() {
    const {
      onPageChange,
      currentPage,
    } = this.props;

    onPageChange(currentPage + 1);
  }

  onPrevious() {
    const {
      onPageChange,
      currentPage,
    } = this.props;

    onPageChange(currentPage - 1);
  }

  calculateRange() {
    const {
      total,
      pageSize,
      currentPage
    } = this.props;

    const totalPageCount = Math.ceil(total / pageSize);

    // количество элементов в списке страниц
    const totalPageNumbers = 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
	
    const leftSiblingIndex = Math.max(currentPage, 1);
    const rightSiblingIndex = Math.min(currentPage, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
     
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }

  render() {
    const {
      onPageChange,
      currentPage,
      className = '',
    } = this.props;

    const {
      paginationRange,
    } = this.state;

    if (paginationRange.length < 2) {
      return null;
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
      <ul
        className={`pagination ${className}`}
      >
        
        <li
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={this.onPrevious}
        >
          <div className="arrow left" />
        </li>
        
        {paginationRange.map((pageNumber) => {
          
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }
      
          return (
            <li
              key={pageNumber}
              className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
        
        <li
          className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''}`}
          onClick={this.onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    )
  }
}

type PropTypes = {
  onPageChange: (pageNumber: number) => void;
  total: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

type StateTypes = {
  paginationRange: (string | number)[];
}

export default Pagination;