import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import CrmsModal from '../../../core/modals/crms_modal'

const CompaniesGrid = () => {
  const routes = all_routes
  return (
    <>
    <div className="page-wrapper">
  <div className="content">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Companies</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to={routes.adminDashboard}>
                <i className="ti ti-smart-home" />
              </Link>
            </li>
            <li className="breadcrumb-item">CRM</li>
            <li className="breadcrumb-item active" aria-current="page">
              Companies Grid
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="me-2 mb-2">
          <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
            <Link to={routes.companiesList} className="btn btn-icon btn-sm me-1">
              <i className="ti ti-list-tree" />
            </Link>
            <Link
              to={routes.companiesGrid}
              className="btn btn-icon btn-sm active bg-primary text-white"
            >
              <i className="ti ti-layout-grid" />
            </Link>
          </div>
        </div>
        <div className="me-2 mb-2">
          <div className="dropdown">
            <Link
              to="#"
              className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-file-export me-1" />
              Export
            </Link>
            <ul className="dropdown-menu  dropdown-menu-end p-3">
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  <i className="ti ti-file-type-pdf me-1" />
                  Export as PDF
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  <i className="ti ti-file-type-xls me-1" />
                  Export as Excel{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-2">
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#add_company"
            className="btn btn-primary d-flex align-items-center"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Company
          </Link>
        </div>
        <div className="head-icons ms-2">
        <CollapseHeader/>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    <div className="card">
      <div className="card-body p-3">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Companies Grid</h5>
          <div className="dropdown">
            <Link
              to="#"
              className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Sort By : Last 7 Days
            </Link>
            <ul className="dropdown-menu  dropdown-menu-end p-3">
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  Recently Added
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  Ascending
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  Desending
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  Last Month
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  Last 7 Days
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-12.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>BrightWave Innovations</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-05.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-06.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-07.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-08.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-09.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                darlee@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (163) 2459 315
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Germany
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-13.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Stellar Dynamics</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-01.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-03.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-04.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-05.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                sharon@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (146) 1249 296
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                USA
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                5.0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-14.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Quantum Nexus</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-06.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-07.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-03.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-04.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-05.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                vaughan@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (158) 3459 596
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                India
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-15.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>EcoVision Enterprises</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-08.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-09.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-10.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-11.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-12.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                jessica@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (135) 3489 516
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Canada
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-16.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Aurora Technologies</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-13.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-14.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-15.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-16.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-17.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                carol@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (196) 4862 196
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                China
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                3.0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-17.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>BlueSky Ventures</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-18.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-19.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-20.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-21.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-22.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                dawn@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (163) 6498 256
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Japan
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                5.0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-18.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>TerraFusion Energy</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-23.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-24.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-25.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-26.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-27.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                rachel@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (154) 6481 075
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Indonesia
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                3.5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-19.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>UrbanPulse Design</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-28.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-29.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-30.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-01.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                jonella@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (184) 6348 195
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Cuba
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-20.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Nimbus Networks</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-10.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-11.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-12.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-13.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-14.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                jonathan@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (175) 2496 125
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Israel
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.4
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-21.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Epicurean Delights</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-15.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-16.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-17.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-18.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-19.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                patricia@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (132) 3145 977
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Colombia
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                2.7
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-22.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Hermann Groups</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-20.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-21.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-22.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-23.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-24.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                patricia@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (132) 3145 977
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Colombia
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="form-check form-check-md">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div>
                <Link
                  to={routes.companiesDetails}
                  className="avatar avatar-xl avatar-rounded online border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-23.svg"
                    className="img-fluid h-auto w-auto"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-icon btn-sm rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_company"
                    >
                      <i className="ti ti-edit me-1" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded-1"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-3">
              <h6 className="mb-1">
                <Link to={routes.companiesDetails}>Beacon Softwares</Link>
              </h6>
              <div className="avatar-list-stacked avatar-group-sm">
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-25.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-26.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-27.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-28.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <ImageWithBasePath
                    className="border border-white"
                    src="assets/img/profiles/avatar-29.jpg"
                    alt="img"
                  />
                </span>
                <Link
                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                  to="#"
                >
                  +1
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-mail-forward text-gray-5 me-2" />
                gloria@example.com
              </p>
              <p className="text-dark d-inline-flex align-items-center mb-2">
                <i className="ti ti-phone text-gray-5 me-2" />
                (134) 7589 6348
              </p>
              <p className="text-dark d-inline-flex align-items-center">
                <i className="ti ti-map-pin text-gray-5 me-2" />
                Brazil
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
              <div className="icons-social d-flex align-items-center">
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-mail" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-phone-call" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-message-2" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm me-1">
                  <i className="ti ti-brand-skype" />
                </Link>
                <Link to="#" className="avatar avatar-rounded avatar-sm">
                  <i className="ti ti-brand-facebook" />
                </Link>
              </div>
              <span className="d-inline-flex align-items-center">
                <i className="ti ti-star-filled text-warning me-1" />
                4.2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mb-4">
      <Link to="#" className="btn btn-white border">
        <i className="ti ti-loader-3 text-primary me-2" />
        Load More
      </Link>
    </div>
  </div>
  <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
    <p className="mb-0">2014 - 2025 © SmartHR.</p>
    <p>
      Designed &amp; Developed By{" "}
      <Link to="#" className="text-primary">
        Dreams
      </Link>
    </p>
  </div>
</div>
<CrmsModal/>
    </>
  )
}

export default CompaniesGrid