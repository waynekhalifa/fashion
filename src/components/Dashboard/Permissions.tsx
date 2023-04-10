import { Grid, Typography } from "@mui/material";
import FormButton from "../UI/FormButton";
import { useCallback, useEffect } from "react";
import useLoading from "@/hooks/useLoading";
import usePermission from "@/resources/usePermission";
import { IOption, IResponse } from "@/models/app";
import { Responses } from "@/constants/enums";
import ActionLoader from "../UI/ActionLoader/ActionLoader";
import { IOptions } from "@/services/permission";
import { useSelector } from "react-redux";
import { selectPermissions } from "@/store/featureSlice";
import VCheckbox from "../UI/VCheckbox";

interface Props {
  slug: string;
}

const Permissions: React.FC<Props> = ({ slug }) => {
  const permissions: IOptions = useSelector(selectPermissions);
  const { loading, setLoading } = useLoading();
  const { permissionsFetch, permissionsChangeListings } = usePermission();

  const fetch = useCallback(async () => {
    const response: IResponse[] = await Promise.all([permissionsFetch()]);

    const [permissions] = response;

    if (permissions.type === Responses.ERROR || permissions.data.length === 0) {
      setLoading(false);
      return;
    }

    permissionsChangeListings(permissions.data);

    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, []);

  const renderTitle = (): string => {
    if (slug === "reviewer-permissions") return "صلاحيات المراجع:";
    if (slug === "coach-permissions") return "صلاحيات المدرب:";
    return "";
  };

  if (loading) return <ActionLoader position="absolute" />;

  return (
    <>
      {renderTitle().length > 0 && (
        <Typography variant="h5" fontWeight={700}>
          {renderTitle()}
        </Typography>
      )}
      <Grid container spacing={4} sx={{ mt: 4, mb: 16 }}>
        {permissions.map((permission: IOption) => (
          <Grid key={permission.value} item xs={12} md={4}>
            <VCheckbox option={permission} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent={"center"}>
        <FormButton>حفظ</FormButton>
      </Grid>
    </>
  );
};

export default Permissions;
