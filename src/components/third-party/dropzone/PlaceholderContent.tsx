// material-ui
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import { DropzopType } from 'config';

// assets
import { Camera } from 'iconsax-react';
import UploadCover from 'assets/images/upload/upload.svg';

// ==============================|| UPLOAD - PLACEHOLDER ||============================== //

export default function PlaceholderContent({ type }: { type?: DropzopType }) {
  return (
    <>
      {type !== DropzopType.STANDARD && (
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
        >
          <CardMedia component="img" image={UploadCover} sx={{ width: 80 }} />
          <Stack sx={{ paddingLeft: 2, paddingRight: 2, width: 150 }} spacing={1}>
            <Typography variant="h5">Drag & Drop or Select file</Typography>
            <Typography color="secondary">
              Drop files here or click browse thorough your machine
            </Typography>
          </Stack>
        </Stack>
      )}
      {type === DropzopType.STANDARD && (
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Camera style={{ fontSize: '32px' }} />
        </Stack>
      )}
    </>
  );
}
