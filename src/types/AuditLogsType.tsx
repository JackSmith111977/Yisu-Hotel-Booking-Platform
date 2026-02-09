/**
 * 审核日志
 * @description 审核日志
 * @param id 日志ID
 * @param operator_name 操作者
 * @param action_type 操作类型
 * @param target_name 目标名称
 * @param action_time 操作时间
 * @param content 操作详情
 */
export interface AuditLogs {
  /**
   * 日志ID
   * @description 日志ID
   * @type string
   */
  id: string;
  /**
   * 操作者
   * @description 操作者
   * @type string
   */
  operator_name: string;
  /**
   * 操作类型
   * @description 操作类型
   * @type string
   */
  action_type: string;
  /**
   * 目标名称
   * @description 目标名称
   * @type string
   */
  target_name: string;
  /**
   * 操作时间
   * @description 操作时间
   * @type string
   */
  created_at: string;
  /**
   * 操作详情
   * @description 操作详情
   * @type string
   */
  content: string;
}
