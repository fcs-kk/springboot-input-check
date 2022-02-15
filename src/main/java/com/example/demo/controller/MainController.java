package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 *  メインコントローラクラス
 */
@Controller
public class MainController 
{
	/**
	 *  入力画面
	 *  @version 1.0
	 *  @param Model 画面データモデル
	 *  @return 入力画面
	 */
	@RequestMapping(value = "/input", method = RequestMethod.GET)
	public String index(Model model) 
	{
		// 入力画面を表示
		return "input";
	}

	@RequestMapping(value = "/input", method = RequestMethod.POST)
	public String result(Model model) 
	{
		// ファイルリストを表示モデルにセット
		model.addAttribute("result", "登録完了しました。");

		// 登録完了画面を表示
		return "result";
	}

		/**
	 *  登録処理
	 *  @version 1.0
	 *  @param Model 画面データモデル
	 *  @return 登録完了画面
	 */
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String result2(Model model) 
	{
		// ファイルリストを表示モデルにセット
		model.addAttribute("result", "登録完了しました。");

		// 登録完了画面を表示
		return "result";
	}
}
