import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_URL: str({
    desc: 'The connection string of the database to backup.'
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: 'The cron schedule to run the backup on.',
    default: '0 5 * * *',
    allowEmpty: true
  }),
  AWS_S3_ENDPOINT: str({
    desc: 'The S3 custom endpoint you want to use.',
    default: '',
    allowEmpty: true,
  }),
  PG_DUMP_EXTRA_ARGS: str({
    desc: 'Extra pg_dump arguments, e.g. --exclude-table-data=directus_cache_stats_* to keep observability churn out of the dump and out of the server page cache.',
    default: '',
    allowEmpty: true,
  }),
  EVICT_PAGE_CACHE_AFTER_DUMP: bool({
    desc: 'After the upload, drop the dumped relations from the server OS page cache with pgfincore, so the read-once pages stop being metered as container memory. Needs CREATE EXTENSION pgfincore on the server and a superuser connection.',
    default: false,
    allowEmpty: true,
  }),
  RUN_ON_STARTUP: bool({
    desc: 'Run a backup on startup of this application',
    default: false,
    allowEmpty: true,
  })
})