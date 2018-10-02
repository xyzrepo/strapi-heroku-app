'use strict';

/**
 * Areas.js controller
 *
 * @description: A set of functions called "actions" for managing `Areas`.
 */

module.exports = {

  /**
   * Retrieve areas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.areas.search(ctx.query);
    } else {
      return strapi.services.areas.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a areas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.areas.fetch(ctx.params);
  },

  /**
   * Count areas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.areas.count(ctx.query);
  },

  /**
   * Create a/an areas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.areas.add(ctx.request.body);
  },

  /**
   * Update a/an areas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.areas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an areas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.areas.remove(ctx.params);
  }
};
