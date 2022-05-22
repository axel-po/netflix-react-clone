import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingFullScreen() {
  return (
    <div className='flex h-[100vh] items-center justify-center' role='alert'>
      <CircularProgress role='alert'/>
    </div>
  );
}
