import {useEffect, useState, useMemo} from "react";
import DataTable from "react-data-table-component";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {FaRegEdit} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
export const columns = [
  {
    name: "ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "UsedID Owner",
    selector: "firstName",
    sortable: true,
  },
  {
    name: "Image",
    selector: "imageUrl",
    cell: (row) => <img className="w-9 h-9 rounded-full" />,
    sortable: true,
  },

  {
    name: "Content",
    selector: "content",
    sortable: true,
  },
  {
    name: "Liked",
    selector: "countLike",
    sortable: true,
  },
  {
    name: "Comented",
    selector: "countCmted",
    sortable: true,
  },
  {
    name: "Reported",
    selector: "countReported",
    sortable: true,
  },
  {
    name: "Shared",
    selector: "countShared",
    sortable: true,
  },
  {
    cell: () => (
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="">
          <button
            className="hover:bg-black/20 text-black rounded-full"
            onClick={handleButtonClick}
          >
            <BiDotsVerticalRounded size={20} />
          </button>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
        >
          <li>
            <a>
              <FaRegEdit size={18} /> Edit
            </a>
          </li>
          <li>
            <a className="text-red">
              <AiOutlineDelete size={18} /> Delete
            </a>
          </li>
        </ul>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const customStyles = {
  headRow: {
    style: {
      border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#f5f5f5",
      borderBottomColor: "#FFFFFF",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};

const handleButtonClick = () => {};

const ReportManagement = () => {
  const [pending, setPending] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const handlePageChange = (page) => {
    fetchUsers(page);
  };
  const fetchUsers = async (page) => {
    setLoading(true);
  };

  const handlePerRowsChange = async (newPerPage, page) => {};

  return (
    <>
      <div className="flex justify-center pt-11  ">
        <div className="flex flex-col justify-start border border-black/20 p-6 shadow">
          <div className="text-black text-2xl mb-6 ">User Management</div>
          <div className="main w-[1000px] ">
            <DataTable
              // progressPending={loading}
              columns={columns}
              // data={data}
              customStyles={customStyles}
              highlightOnHover
              pointerOnHover
              pagination
              paginationServer
              paginationTotalRows={totalRows}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              defaultSortField="id"
              defaultSortAsc={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportManagement;
