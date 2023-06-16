import { TabletDetail } from '../models/TabletDetail';

export const findById = (id: string) => {
  return TabletDetail.findByPk(id);
};
