import { Card, Skeleton, CardContent } from "@mui/material";

const CharactreSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Skeleton height={25} />
      </CardContent>
    </Card>
  );
};

export default CharactreSkeleton;
