import { CustomerAdmin } from '@/types/@autoaid/entity/customer';
import { DeleteTwoTone, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
import { CloseOutlined } from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { Box, Stack, useTheme } from '@mui/system';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Avatar from '@ui/@extended/Avatar';
import { IndeterminateCheckbox } from '@ui/third-party/ReactTable';
import React, { useMemo } from 'react'
import moment from "moment"
// type Props = {}

const useCustomerTable = () => {
	const theme = useTheme();

	const columnHelper = createColumnHelper<CustomerAdmin>();
	//TODO: cast type later
	const columns: ColumnDef<CustomerAdmin,any>[] = useMemo<ColumnDef<CustomerAdmin, any>[]>(
    () => {
      const cols: ColumnDef<CustomerAdmin, any>[] = [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        columnHelper.accessor<any, any>("selection", {
          header: ({
            table: {
              getIsAllRowsSelected,
              getIsSomeRowsSelected,
              getToggleAllRowsSelectedHandler,
            },
          }) => (
            <IndeterminateCheckbox
              {
                ...{
                checked: getIsAllRowsSelected(),
                indeterminate: getIsSomeRowsSelected(),
                onChange: getToggleAllRowsSelectedHandler(),
                }
              }
            />
          ),
          cell: ({ row }) => (
            <Box display={"flex"} justifyContent="center">
            <IndeterminateCheckbox
              indeterminate={false}
              checked={row.getIsSelected()}
              />
              </Box>
          ),
          enableSorting: false,
        }),
        columnHelper.accessor("customer_id", {
          header: () => {
            return "#";
          },
          cell: ({ row }) => (
            <Typography  sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              }} textAlign={"center"}>
              CUS-{row?.original?.customer_id}
            </Typography>
          )
        }),
        columnHelper.accessor("account.email", {
          header: "Customer",
          cell: ({ row }) => {
            return (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  alt="Avatar 1"
                  size="sm"
                  src={"https://source.unsplash.com/random"}
                />
                <Stack spacing={0}>
                  <Typography variant="subtitle1">
                    {`${row.original?.first_name} ${row.original?.last_name }`}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {row.original?.email}
                  </Typography>
                </Stack>
              </Stack>
            );
          },
          meta: {
            align : "left"
          },
          enableSorting: false,

        }),
        // columnHelper.accessor("user.avatarUrl", {
        //   header: "Avatar",
        //   enableSorting: false,
        //   enableHiding: true,
        // }),
        columnHelper.accessor("email", {
          header: "Email",
          meta: {
            align : "left"
          }
        }),
        columnHelper.accessor("phone_number", {
          header: "Phone",
          meta: {
            align : "left"
          }
        }),
        // columnHelper.accessor("avatar_url", {
        //   header: "Contact",
        //   cell: ({ renderValue }) => (
				// 		<Avatar
				// 		alt="Avatar 1"
				// 		size="sm"
				// 		src={renderValue() || "https://source.unsplash.com/random"}
				// 	/>
        //   ),
        //   meta: {
        //     align : "left"
        //   },
        //   enableSorting: false,
        // }),
        columnHelper.accessor("address", {
          header: "Address",
          cell: ({ renderValue }) => (
            <Typography textAlign={"left"}>{(renderValue() ?? 0 ) as any}</Typography>
          ),
          meta: {
            align : "left"
          },
          enableSorting: false,
        }),
        columnHelper.accessor("account.created_date", {
          header: "Date joined",
          cell: ({ renderValue }) => (
						<Typography textAlign={"left"}>{moment(Date.parse(renderValue())).format("DD/MM/YYYY") ?? "0"}</Typography>
          ),
					meta: {
            align : "left"
          },
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        columnHelper.accessor<any, any>("action", {
          header: "Actions",
          enableSorting: false,
          cell: ({ row }) => {
            const collapseIcon = row.getIsExpanded() ? (
              <CloseOutlined
                // rev={{}}
                style={{ color: theme.palette.error.main }}
              />
            ) : (
              <EyeTwoTone
                rev={{}}
                twoToneColor={theme.palette.secondary.main}
              />
            );
            return (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={0}>
                <Tooltip title="View">
                  <IconButton
                    color="secondary"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      // row.toggleExpanded();
                      // setCustomer(row.original);
                      // setDetailViewToggle(true);
                    }}>
                    {collapseIcon}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton
                    color="primary"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      // setCustomer(row.original);
                      // setAdd(true)
                    }}>
                    <EditTwoTone
                      rev={{}}
                      twoToneColor={theme.palette.primary.main}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    color="error"
                    onClick={(e: any) => {
                      // setActionId(row.original?.id)
                      // setDeleteConfirmation(true);
                      e.stopPropagation();
                    }}>
                    <DeleteTwoTone
                      rev={{}}
                      twoToneColor={theme.palette.error.main}
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
            );
          },
        }),
      ];
      return cols;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );
		return ({
			columns
		})

}

export default useCustomerTable
