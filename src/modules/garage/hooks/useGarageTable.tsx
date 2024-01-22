import { GarageAdmin } from '@/types/@autoaid/entity/garage';
import { CustomerStatus } from '@/types/@mk/enum/customerStatus';
import { CloseOutlined, DeleteTwoTone, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
import { Chip, Tooltip, Typography, useTheme } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Avatar from '@ui/@extended/Avatar';
import IconButton from '@ui/@extended/IconButton';
import { IndeterminateCheckbox } from '@ui/third-party/ReactTable';
import { useMemo } from 'react';

const useGarageTable = () => {
	const theme = useTheme();

	const columnHelper = createColumnHelper<GarageAdmin>();
	//TODO: cast type later
	const columns: ColumnDef<GarageAdmin,any>[] = useMemo<ColumnDef<GarageAdmin, any>[]>(
    () => {
      const cols: ColumnDef<GarageAdmin, any>[] = [
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
        columnHelper.accessor("garage_id", {
          header: () => {
            return "#";
          },
          cell: ({ row }) => (
            <Typography  sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              }} textAlign={"center"}>
              GAR-{row?.original?.garage_id}
            </Typography>
          )
        }),
				//TODO : remove later
        columnHelper.accessor<any,any>("name", {
          header: () => {
            return "Name";
          },
          cell: ({ row }) => (
            <Typography  sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              }} textAlign={"center"}>
              Garage Name
            </Typography>
          )
        }),
        columnHelper.accessor("owner_id", {
          header: "Owner",
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
                    {row.original?.ownerName}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {row.original?.ownerEmail}
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
        columnHelper.accessor("avatar_url", {
          header: "Contact",
          cell: ({ renderValue }) => (
						<Avatar
						alt="Avatar 1"
						size="sm"
						src={renderValue() || "https://source.unsplash.com/random"}
					/>
          ),
          meta: {
            align : "left"
          },
          enableSorting: false,
        }),
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
        columnHelper.accessor("introduction", {
          header: "About",
          cell: ({ renderValue }) => (
            <Typography textAlign={"left"}>{(renderValue() ?? 0 ) as any}</Typography>
          ),
          meta: {
            align : "left"
          },
          enableSorting: false,

        }),
        columnHelper.accessor("created_date", {
          header: "Date joined",
          cell: ({ renderValue }) => (
            <Typography textAlign={"left"}>{(renderValue() ?? 0 ) as any}</Typography>
          ),
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        columnHelper.accessor<any, any>("action", {
          header: "Actions",
          enableSorting: false,
          cell: ({ row }) => {
            const collapseIcon = row.getIsExpanded() ? (
              <CloseOutlined
                rev={{}}
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

export default useGarageTable
