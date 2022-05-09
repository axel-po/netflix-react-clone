import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingFullScreen() {
  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <CircularProgress />
    </div>
  );
}
