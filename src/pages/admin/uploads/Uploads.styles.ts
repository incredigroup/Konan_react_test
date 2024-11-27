import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    backgroundColor: "#1C1C1C",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 30,
  },
  uploadFileCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  tdStyleOdd: {
    backgroundColor: "#272727",
  },
  tdStyleEven: {
    backgroundColor: "#000000",
  },
  title: {
    marginBottom: "0 !important",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "35px",
  },
  panelTitle: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  optionTitle: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: "auto !important",
    marginTop: "20px",
  },
  searchOptionContainer: {
    marginTop: 10,
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  searchField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  searchText: {
    marginBottom: 5,
  },
  searchBar: {
    width: "100%",
    height: 60,
    backgroundColor: "#282937",
    borderRadius: 10,
  },
  selectBar: {
    width: "100%",
    height: 60,
    "& .ant-select-selector": {
      border: "1px solid #424242 !important",
      backgroundColor: "#282937 !important",
    },
  },
  searchBtn: {
    width: "100%",
    border: 0,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#498DCE",

    "& .ant-select-selector": {
      borderRadius: 8,
    },
  },
  clearBtn: {
    width: "100%",
    border: "1px solid",
    borderColor: "#498DCE",
    height: 60,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
  OptionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  sortContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sortBar: {
    width: "70%",
    height: 30,

    "& > .ant-select-selector": {
      border: "0 !important",
      backgroundColor: "transparent !important",
    },

    "& > div > div >.ant-select-selection-placeholder": {
      insetInlineEnd: "0 !important",
    },
  },
  sortTitle: {
    marginBottom: "0 !important",
  },
  viewIconContainer: {
    "& .ant-image": { display: "flex", float: "inline-end", marginRight: 10 },
  },
  viewIcon: {},
  createReportBtn: {
    height: 50,
    backgroundColor: "#498DCE",
    border: 0,
    borderRadius: 15,
  },
  createBtn: {
    fontSize: 20,
  },
  uploadsTable: {
    flex: 1,
    "& .ant-table": {
      "& th, & td": {
        fontSize: 13,
        color: theme.colors.colorText,
        fontWeight: 400,
      },
      "& th": {
        color: "#8E8E8E !important",
      },
      "& tr > td": {
        borderBottom: "16px solid #1C1C1C",
        borderRed: "16px solid #1C1C1C",
      },
      "& th .ant-dropdown-open": {
        visibility: "hidden",
      },
      "& tr > th": {
        fontSize: 13,
        color: theme.colors.colorText,
        fontWeight: 400,
        backgroundColor: "#1C1C1C",
      },
    },
    "& .ant-pagination": {
      "& .ant-pagination-item": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-item-active > a": {
        color: "#000",
        backgroundColor: "#498dce",
      },
      "& .ant-pagination-item > a": {
        padding: "5px 13px",
      },
      "& .ant-pagination-prev": {
        display: "flex",
        border: "1px solid #325475",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
        padding: "20px 10px",
        alignItems: "center",
        marginInlineEnd: 0,
      },
      "& .ant-pagination-jump-next": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-next": {
        border: "1px solid #325475",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: "20px 20px",
        alignItems: "center",
        justifyContent: "end",
        display: "flex",
      },
      "& .ant-pagination-item-link-icon": {
        padding: "0 9px",
      },
      "& .ant-pagination-item-ellipsis": {
        padding: "0 5px",
      },
      "& .ant-pagination-jump-prev": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
    },
  },
  tdFirstCell: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  tdIconStyle: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  invisible: {
    visibility: "hidden",
  },
  cardPagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",

    "& .ant-pagination": {
      "& .ant-pagination-item": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-item-active > a": {
        color: "#000",
        backgroundColor: "#498dce",
      },
      "& .ant-pagination-item > a": {
        padding: "5px 13px",
      },
      "& .ant-pagination-prev": {
        display: "flex",
        border: "1px solid #325475",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
        padding: "20px 10px",
        alignItems: "center",
        marginInlineEnd: 0,
      },
      "& .ant-pagination-jump-next": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-next": {
        border: "1px solid #325475",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: "20px 20px",
        alignItems: "center",
        justifyContent: "end",
        display: "flex",
      },
      "& .ant-pagination-item-link-icon": {
        padding: "0 9px",
      },
      "& .ant-pagination-item-ellipsis": {
        padding: "0 5px",
      },
      "& .ant-pagination-jump-prev": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
    },
  },
  cardContainer: {
    backgroundColor: "#1c1c1e",
    color: "#fff",
    borderRadius: 8,

    "& .ant-card-body": {
      padding: "24px 12px",

      "& .ant-divider-horizontal": {
        margin: "12px 0",
      },

      "& .ant-space-gap-row-small": {
        rowGap: 0,
      },
    },
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.45)",
    fontWeight: 400,
    fontSize: 14,
  },
  value: {
    color: "#FFF",
    fontWeight: 500,
    fontSize: 16,
  },
}));

export { useStyles };
