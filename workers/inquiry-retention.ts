import { pruneExpiredInquiries } from './inquiry-retention-core';

export default {
  async scheduled(
    controller: ScheduledController,
    env: RetentionEnv,
  ): Promise<void> {
    try {
      const deleted = await pruneExpiredInquiries(
        env.LEADS_DB,
        new Date(controller.scheduledTime),
      );
      console.log(JSON.stringify({
        event: 'inquiry_retention_prune',
        deleted,
        scheduledAt: new Date(controller.scheduledTime).toISOString(),
      }));
    } catch (error) {
      console.error(JSON.stringify({
        event: 'inquiry_retention_error',
        message: error instanceof Error ? error.message : 'Unknown D1 error',
      }));
      throw error;
    }
  },
} satisfies ExportedHandler<RetentionEnv>;
