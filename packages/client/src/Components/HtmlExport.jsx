import React from 'react';
import Link from "../Components/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

import {
  EXPORT_ROUTE,
  EXPORT_PRINT_SUBROUTE,
} from "../consts";

const HtmlExport = ({ id }) => (
  <Link href={(EXPORT_ROUTE + EXPORT_PRINT_SUBROUTE).replace(':id', id)}>
    <a href="#" className='link link--secondary'><FontAwesomeIcon icon={faPrint} /> print</a>
  </Link>
)

export default HtmlExport;
